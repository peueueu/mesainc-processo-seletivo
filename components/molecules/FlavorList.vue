<template>
  <div id="flavorList">
    <div class="title_wrapper">
      <h1 class="list_title">Your flavorit restaurants:</h1>
    </div>
    <ul class="listRestaurants">
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        checkFav
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        checkFav
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
      <FlavorCard
        name="Restaurant Xing pyn xang"
        address="Rua Sir. Pyong lee, 153 - ChinaTown"
        :checkFav="false"
      />
    </ul>
  </div>
</template>

<script>
import FlavorCard from "@/components/atoms/FlavorCard";
export default {};
</script>

<style lang="scss">
#flavorList {
  width: 350px;
  height: 450px;
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
</style>
