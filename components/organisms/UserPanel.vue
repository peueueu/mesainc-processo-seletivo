<template>
  <div id="user-panel">
    <FlavorProfile
      v-if="loaded"
      :name="userInfo.firstName + ' ' + userInfo.lastName"
      :profileImage="userInfo.avatar"
    />
    <div class="container-list">
      <FlavorList />
    </div>
  </div>
</template>

<script>
import FlavorProfile from "@/components/molecules/FlavorProfile";
import FlavorList from "@/components/molecules/FlavorList";
export default {
  data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        avatar: "",
        email: ""
      },
      loaded: false
    };
  },
  methods: {
    async getUser() {
      const user = await this.$axios.get("/users/2").then(response => {
        return {
          firstName: response.data.data.first_name,
          lastName: response.data.data.last_name,
          avatar: response.data.data.avatar,
          email: response.data.data.email
        };
      });
      this.userInfo = {
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email
      };
      this.loaded = true;
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<style lang="scss" scoped>
#user-panel {
  width: 100%;
  height: 100%;
  max-width: 450px;
  background: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}

.container-list {
  display: flex !important;
  justify-content: center !important;
  height: 60% !important;
}
</style>
