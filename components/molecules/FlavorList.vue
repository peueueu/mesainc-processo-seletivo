<template>
  <div id="flavorList" v-if="loaded">
    <div class="title_wrapper">
      <h1 class="list_title">Your flavorit restaurants:</h1>
    </div>
    <ul class="listRestaurants">
      <FlavorCard
        v-for="location in locations"
        :key="location.id"
        :name="location.name"
        :address="location.address"
        @click.native.prevent="handleClick"
      />
    </ul>
  </div>
</template>

<script>
import FlavorCard from "@/components/atoms/FlavorCard";
export default {
  data() {
    return {
      centerCoord: {
        lat: 0.0,
        lng: 0.0
      },
      locations: [],
      loaded: false
    };
  },
  methods: {
    handleClick() {
      console.log(event.target);
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        this.centerCoord.lat = position.coords.latitude;
        this.centerCoord.lng = position.coords.longitude;
        const response = await this.$axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude.toString()},${position.coords.longitude.toString()}&radius=1000&type=restaurant&key=AIzaSyCBvfAxcxJ54CvkiGuOM0EyzIk_4dVWGI8`
        );
        this.locations = [...response.data.results].map(location => {
          return {
            name: location.name,
            id: location.place_id,
            address: location.vicinity,
            isOpen: location.opening_hours,
            score: location.rating
          };
        });
        this.loaded = true;
      });
    }
  }
};
</script>

<style lang="scss">
#flavorList {
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px;
  justify-content: flex-start;
}
.title_wrapper {
  margin-bottom: 10px;
  .list_title {
    color: $primaryColor;
    font-size: 1.25rem;
    font-weight: bold;
  }
}

.listRestaurants {
  overflow-y: scroll;
}

@media (min-width: 1500px) {
  #flavorList {
    height: 480px;
  }
}
</style>
