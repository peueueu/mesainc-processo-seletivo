<template>
  <div id="error">
    <div class="error-info">
      <FlavorLogo title="" isSignIn />
      <h1>Page not found or Access Denied</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: $lightGrey;

  .error-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    color: $primaryColor;
    font-size: 2.5rem;
    font-weight: bold;
  }
}
</style>
