<template>
  <section id="user-page">
    <div class="user-area">
      <FlavorProfile
        name="Sônia"
        profileImage="https://images.unsplash.com/photo-1558642854-3e650c38549e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80"
      />
      <div class="container-list">
        <FlavorList />
      </div>
    </div>
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
        <!-- styles: mapStyle -->
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng
          }"
          @click="currentLocation = location"
        >
          <!-- :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected
          }" -->
          <GMapInfoWindow :options="{ maxWidth: 200 }" class="gmap-info-box">
            <b>{{ location.name }}</b>
            <br />
            <br />
            <code>
              Lat: {{ location.lat }},
              <br />
              Lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
    </div>
  </section>
</template>

<script>
import FlavorProfile from "@/components/molecules/FlavorProfile";
import FlavorList from "@/components/molecules/FlavorList";
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
      // pins: {
      //   selected:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
      //   notSelected:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      // }
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
        this.locations = [...response.data.results];
        this.loaded = true;
      });
    }
  }
};
</script>

<style lang="scss">
#user-page {
  height: 100vh;
  display: flex;
}

.user-area {
  width: 100%;
  max-width: 450px;
  background: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container_list {
  display: flex !important;
  justify-content: center !important;
}

.map {
  width: 100%;
}

.GMap {
  height: 100%;
}

.GMap__Wrapper {
  height: 100%;
}
</style>
