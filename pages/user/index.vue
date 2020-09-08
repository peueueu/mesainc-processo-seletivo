<template>
  <section id="user-page">
    <UserPanel />
    <FlavorMap />
  </section>
</template>

<script>
import localforage from "localforage";
export default {
  data() {
    return {
      currentLocation: {},
      centerCoord: {
        lat: 0.0,
        lng: 0.0
      },
      loaded: false,
      locationsVisibleOnMap: "",
      locations: []
    };
  },

  async validate({ route, redirect, store }) {
    let response = await localforage
      .getItem("user-flavorit")
      .then(response => JSON.parse(response));
    return !response.token.length &&
      route.path !== "/" &&
      route.path !== "/signup"
      ? false
      : true;
  }
};
</script>

<style lang="scss">
#user-page {
  height: 100vh;
  display: flex;
}
</style>
