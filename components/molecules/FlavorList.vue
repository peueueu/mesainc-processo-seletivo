<template>
  <div id="flavorList" v-if="loaded">
    <div class="title_wrapper">
      <h1 class="list_title">Your flavorit restaurants:</h1>
    </div>
    <ul class="listRestaurants">
      <FlavorCard
        v-for="location in locations"
        :key="location.id"
        :id="location.id"
        :name="location.name"
        :address="location.address"
        @click="showDetails(location)"
      />
    </ul>
    <RestaurantModal
      v-if="location"
      @close="$event => hideDetails($event)"
      :restaurantName="location.name"
      :restaurantAddress="location.address"
      :restaurantScore="location.score"
    />
  </div>
</template>

<script>
import FlavorCard from "@/components/atoms/FlavorCard";
import RestaurantModal from "@/components/molecules/RestaurantModal";
export default {
  data() {
    return {
      centerCoord: {
        lat: 0.0,
        lng: 0.0
      },
      locations: [],
      location: false,
      loaded: false
    };
  },
  methods: {
    showDetails({ name, address, score }) {
      this.location = {
        name,
        address,
        score
      };
      console.log(this.locations);
    },
    hideDetails({ target, currentTarget }) {
      if (target === currentTarget) this.location = false;
      // this.$store.commit("user/SET_FAV", true);
    },
    fetchAllRestaurants() {
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
    // async fetchRestaurant({ name, vicinity, rating }) {

    // }
  },
  mounted() {
    this.fetchAllRestaurants();
  }
};
</script>

<style lang="scss">
#flavorList {
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
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
