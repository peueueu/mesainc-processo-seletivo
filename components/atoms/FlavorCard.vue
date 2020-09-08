<template>
  <li class="flavorCard">
    <div class="card">
      <div class="card_header">
        <h1>{{ name }}</h1>
        <span :class="checkFav ? 'favorite' : ''" @click="favRestaurant">
          <img :src="favoriteIcon" alt="flavorit-item" />
        </span>
      </div>
      <div class="card_body">
        <p>{{ address }}</p>
        <img
          src="~assets/img/comment.svg"
          alt="flavorit-item"
          @click="reviewRestaurant"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { uuid } from "vue-uuid";
import localforage from "localforage";

export default {
  data() {
    return {
      checkFav: ""
    };
  },
  props: {
    id: {
      type: String
      // required: true
    },
    name: {
      type: String
    },
    address: {
      type: String
    },
    restaurantId: {
      type: String
    }
  },
  methods: {
    async reviewRestaurant() {
      this.$emit("click");
    },
    async favRestaurant() {
      this.checkFav = !this.checkFav;
      localforage.setItem(this.name, {
        id: uuid.v1(),
        place_id: this.restaurantId,
        name: this.name,
        isFav: this.checkFav
      });
      this.getFavRestaurants();
    },
    async getFavRestaurants() {
      let response = await localforage.getItem(this.name);
      if (response != null) {
        if (this.restaurantId === response.place_id) {
          this.checkFav = response.isFav;
        }
      }
    }
  },
  computed: {
    favoriteIcon() {
      return this.checkFav
        ? require("assets/img/heartFill.svg")
        : require("assets/img/heartTransparent.svg");
    }
  },
  mounted() {
    this.getFavRestaurants();
  }
};
</script>

<style lang="scss" scoped>
.flavorCard {
  background: $primaryColor;
  width: 100%;
  padding: 12px 17px;
  min-height: 100px;
  margin-bottom: 20px;

  h1 {
    color: $white !important;
    font-size: 1.15rem;
    margin-bottom: 5px;
  }
  .card_header img:hover {
    cursor: pointer;
  }

  .card_body {
    display: flex;
    align-items: center;

    img:hover {
      cursor: pointer;
    }
  }
  p {
    color: $white;
    font-size: 1rem;
    position: relative;
    margin-left: 14px;
    padding: 5px 40px 5px 0;
    word-break: break-word;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 12px;
      height: 12px;
      top: 9px;
      left: -14px;
      background: url("~assets/img/pin.svg");
    }
  }
}

.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
