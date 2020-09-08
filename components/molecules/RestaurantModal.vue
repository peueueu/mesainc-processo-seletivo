<template>
  <div class="opac-bg" @click="$emit('close', $event)">
    <div id="restaurant-modal">
      <div class="modal-header">
        <h1>{{ restaurantName }}</h1>
        <div class="info-header">
          <span>{{ restaurantAddress }}</span>

          <span class="rating"
            ><img src="~/assets/img/star.svg" alt="rating-star" />
            {{ restaurantScore }}
          </span>
        </div>
      </div>
      <div class="modal-body">
        <section class="comments">
          {{ comments.length ? "" : "There are no comments" }}
          <ul id="commentList">
            <FlavorReview
              v-for="comment in comments"
              :key="comment.id"
              :userReview="comment.rating"
              :userComment="comment.comment"
            />
          </ul>
        </section>
        <section class="review">
          <div>
            <h3>Leave your comment below:</h3>
            <FlavorComment @input="value => getComment(value)" />
          </div>
          <div class="controller">
            <StarsRatings
              v-model="rating"
              :increment="0.5"
              :fixed-points="2"
              :show-rating="false"
              :star-size="35"
              :rounded-corners="true"
              :padding="5"
            />
            <FlavorButton
              name="Send Comment"
              className="comment-btn"
              @click="storeComment"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import localforage from "localforage";
import { uuid } from "vue-uuid";
import StarsRatings from "vue-star-rating";
export default {
  data() {
    return {
      rating: 0.0,
      review: "",
      comments: []
    };
  },
  props: {
    restaurantName: {
      type: String,
      required: true
    },
    restaurantAddress: {
      type: String,
      required: true
    },
    restaurantScore: {
      type: Number
    },
    restaurantId: {
      type: String
    }
  },
  methods: {
    getComment(value) {
      this.review = value;
    },
    async storeComment() {
      // id: uuid.v1(),
      // place_id: this.restaurantId,
      // rating: this.rating,
      // comment: this.review
      await localforage.getItem("ratings").then(ratings => {
        ratings = ratings || [];
        ratings.push({
          id: uuid.v1(),
          place_id: this.restaurantId,
          rating: this.rating,
          comment: this.review
        });
        localforage.setItem("ratings", ratings).then(() => {
          this.getComments();
        });
      });
    },
    async getComments() {
      let ratings = await localforage.getItem("ratings");
      this.comments = await ratings.filter(reviews => {
        return reviews.place_id === this.restaurantId;
      });
    }
  },
  mounted() {
    this.getComments();
  }
};
</script>

<style lang="scss" scoped>
.opac-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
}
#restaurant-modal {
  background: $white;
  width: 600px;
  height: 550px;
  border-radius: 5px;

  .modal-header {
    background: $primaryColor;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    border-radius: 5px 5px 0 0;

    .info-header {
      display: flex;
      align-items: center;
    }

    h1 {
      color: $white;
      margin-bottom: 6px;
    }
    span {
      color: $white;
    }

    .rating {
      display: flex;
      align-self: flex-start;
      margin-left: 8px;

      img {
        margin-right: 3px;
      }
    }
  }

  .modal-body {
    display: flex;
    height: 500px;
    background: $white;
    padding: 30px 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;

    h3 {
      color: $darkGrey;
    }
    section.comments {
      width: 100%;
    }
    #commentList {
      width: 100%;
      overflow-y: scroll;
      max-height: 250px;
    }
    .review {
      display: flex;
      align-items: flex-end;

      .comment-btn {
        padding: 14px 32px;
        font-size: 1rem;
        margin-top: 20px;
        margin-bottom: 5px;
      }
    }
  }
}

.controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 20px;
}
</style>
