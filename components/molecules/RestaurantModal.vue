<template>
  <div class="opac-bg" @click="$emit('close', $event)">
    <div id="restaurant-modal">
      <div class="modal-header">
        <h1>{{ restaurantName }}</h1>
        <span>{{ restaurantAddress }}</span>
        <span class="rating"
          ><img src="~/assets/img/star.svg" alt="rating-star" />
          <span>{{ restaurantScore }}</span>
        </span>
      </div>
      <div class="modal-body">
        <section class="comments">
          There are no comments
        </section>
        <section class="review">
          <div>
            <h3>Leave your comment below:</h3>
            <FlavorComment />
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
            <FlavorButton name="Send Comment" className="comment-btn" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import FlavorCover from "@/components/atoms/FlavorCover";
import FlavorButton from "@/components/atoms/FlavorButton";
import FlavorComment from "@/components/atoms/FlavorComment";
import StarsRatings from "vue-star-rating";
import BannerTitle from "@/components/atoms/BannerTitle";
export default {
  data() {
    return {
      rating: 0
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
    }
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

  .modal-header {
    background: $primaryColor;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0 0;

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
      padding-top: 5px;

      span {
        margin: 3px 0 0 4px;
      }
    }
  }

  .modal-body {
    display: flex;
    height: 500px;
    background: $white;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0 0 5px 5px;
    h3 {
      color: $darkGrey;
    }
    .review {
      display: flex;
      align-items: flex-end;
    }
    .comment-btn {
      padding: 14px 32px;
      font-size: 1rem;
      margin-top: 20px;
      margin-bottom: 5px;
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
