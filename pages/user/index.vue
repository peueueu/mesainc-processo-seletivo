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

  // methods: {
  //   returnToCenter() {
  //     this.$refs.gMap.map.setCenter(this.centerCoord);
  //   },

  //   checkForMarkers() {
  //     this.locations.forEach((location, i) => {
  //       location.visible = this.$refs.gMap.map
  //         .getBounds()
  //         .contains(this.$refs.gMap.markers[i].getPosition());
  //     });

  //     this.locationsVisibleOnMap = this.locations
  //       .filter(l => l.visible)
  //       .map(l => l.name)
  //       .join(", ");
  //   },
  //   fetchAllLocations() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(async position => {
  //         this.centerCoord.lat = position.coords.latitude;
  //         this.centerCoord.lng = position.coords.longitude;
  //         const response = await this.$axios.get(
  //           `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude.toString()},${position.coords.longitude.toString()}&radius=1000&type=restaurant&key=AIzaSyCBvfAxcxJ54CvkiGuOM0EyzIk_4dVWGI8`
  //         );
  //         this.locations = [...response.data.results];
  //         this.loaded = true;
  //       });
  //     }
  //   }
  // },
  // mounted() {
  //   this.fetchAllLocations();
  // }
};
</script>

<style lang="scss">
#user-page {
  height: 100vh;
  display: flex;
}

.container_list {
  display: flex !important;
  justify-content: center !important;
}
</style>
