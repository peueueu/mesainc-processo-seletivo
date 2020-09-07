<template>
  <div id="user-panel">
    <FlavorProfile
      name="Sônia"
      profileImage="https://images.unsplash.com/photo-1558642854-3e650c38549e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80"
    />
    <div class="container-list">
      <FlavorList />
    </div>
  </div>
</template>

<script>
import FlavorProfile from "@/components/molecules/FlavorProfile";
import FlavorList from "@/components/molecules/FlavorList";
export default {};
</script>

<style lang="scss" scoped>
#user-panel {
  width: 100%;
  max-width: 450px;
  background: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}

.container_list {
  display: flex !important;
  justify-content: center !important;
}
</style>
