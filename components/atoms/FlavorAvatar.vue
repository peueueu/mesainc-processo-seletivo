<template>
  <div class="user-profile">
    <div
      class="avatar"
      :style="{
        background: 'url(' + userAvatar + ')',
        backgroundSize: 'contain'
      }"
    ></div>
    <h3>Welcome, {{ userName }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    userAvatar: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.user-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  position: absolute;
  top: 0;
  z-index: 10;

  h3 {
    color: $primaryColor;
    font-size: 1.5rem;
    margin-top: 16px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border: 5px solid $white;
    border-radius: 50%;
  }
}
</style>
