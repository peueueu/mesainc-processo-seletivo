<template>
  <div class="user-profile">
    <div
      class="avatar"
      :style="{
        background: 'url(' + userAvatar + ')',
        backgroundSize: 'contain'
      }"
    ></div>
    <div class="profile_info">
      <h3>Welcome, {{ userName }}</h3>
      <span class="sign-out" @click.prevent="handleLogout">Sign out</span>
    </div>
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
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/SIGN_OUT");
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

  .sign-out {
    margin-top: 6px;
    font-size: 1rem;
    color: $mediumGrey;
    display: block;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $primaryColor;
      cursor: pointer;
    }
  }

  .avatar {
    width: 120px;
    height: 120px;
    border: 5px solid $white;
    border-radius: 50%;
    position: relative;
    transition: all 0.4s ease;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url("~assets/img/edit.svg"), rgba(0, 0, 0, 0.5);
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: center;
      visibility: hidden;
    }
    &:hover {
      cursor: pointer;
      &::before {
        visibility: visible;
      }
    }
  }
}
</style>
