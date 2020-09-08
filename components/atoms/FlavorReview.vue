<template>
  <li class="single-comment">
    <div class="userRating">
      <span class="reviewWrapper">
        <img src="~/assets/img/Goldenstar.svg" alt="rating-star" />
        <span>{{ userReview }}</span>
      </span>
      <!-- • -->
    </div>
    <div class="userComment">
      <p>{{ userComment }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    userComment: {
      type: String
    },
    userReview: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.single-comment {
  display: block;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid $lightGrey;

  .reviewWrapper {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  .userComment {
    margin-top: 5px;
  }
}
</style>
