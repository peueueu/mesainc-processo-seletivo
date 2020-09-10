<template>
  <div class="map" v-if="loaded">
    <GMap
      v-show="centerCoord.lat && centerCoord.lng"
      ref="gMap"
      :center="{ lat: centerCoord.lat, lng: centerCoord.lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative'
      }"
      :zoom="16"
      @bounds_changed="checkForMarkers"
      v-lazy-load
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{
          lat: location.geometry.location.lat,
          lng: location.geometry.location.lng
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }" class="gmap-info-box">
          <div class="gmapinfoheader">
            <strong>{{ location.name }}</strong>
            <span
              ><span
                :style="{
                  color: location.opening_hours ? 'green' : 'red',
                  marginLeft: '10px'
                }"
                >•</span
              >{{ location.opening_hours ? "Open" : "Closed" }}</span
            >
          </div>
          <br />
          <code>
            <span class="rating-restaurant"
              >Restaurant Address: {{ location.vicinity }}</span
            >
            <span class="rating-restaurant"
              >Restaurant Score: {{ location.rating }}
              <img src="~assets/img/Goldenstar.svg" alt="rating pin"
            /></span>
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </div>
</template>

<script>
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
  methods: {
    returnToCenter() {
      this.$refs.gMap.map.setCenter(this.centerCoord);
    },

    checkForMarkers() {
      this.locations.forEach((location, i) => {
        location.visible = this.$refs.gMap.map
          .getBounds()
          .contains(this.$refs.gMap.markers[i].getPosition());
      });

      this.locationsVisibleOnMap = this.locations
        .filter(l => l.visible)
        .map(l => l.name)
        .join(", ");
    },
    fetchAllLocations() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          this.centerCoord.lat = position.coords.latitude;
          this.centerCoord.lng = position.coords.longitude;
          const response = await this.$axios.get(
            `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude.toString()},${position.coords.longitude.toString()}&radius=1000&type=restaurant&key${process.env.API_KEY}`
          );
          this.locations = [...response.data.results];
          this.loaded = true;
        });
      }
    }
  },
  mounted() {
    this.fetchAllLocations();
  }
};
</script>

<style lang="scss">
.map {
  width: 100%;
}

.GMap {
  height: 100%;
}

.GMap__Wrapper {
  height: 100%;
}

.gm-style-iw,
.gm-style-iw-d,
.gm-style-iw-c {
  min-width: 300px;
  max-width: 500px !important;
}

.GMap__InfoWindow {
  padding: 10px;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  justify-content: center;
}

.rating-restaurant {
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  img {
    margin-left: 3px;
  }
}
</style>
