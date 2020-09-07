<template>
  <li class="flavorCard">
    <div class="card">
      <div class="card_header">
        <h1>{{ name }}</h1>
        <span
          :class="checkFav ? 'favorite' : ''"
          @mouseover="checkFav = true"
          @mouseleave="checkFav = false"
          @click="handleClick"
        >
          <img :src="favoriteIcon" alt="flavorit-item" />
        </span>
      </div>
      <div class="card_body">
        <p>{{ address }}</p>
      </div>
    </div>
  </li>
</template>

<script>
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
    }
  },
  methods: {
    async handleClick() {
      this.$emit("click");
    }
  },
  computed: {
    favoriteIcon() {
      return this.checkFav
        ? require("assets/img/heartFill.svg")
        : require("assets/img/heartTransparent.svg");
    }
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

  &:hover {
    cursor: pointer;
  }

  h1 {
    color: $white !important;
    font-size: 1.15rem;
    margin-bottom: 5px;
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
