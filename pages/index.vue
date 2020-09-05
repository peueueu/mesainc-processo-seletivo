<template>
  <transition>
    <div class="container">
      <FormSign formTitle="Flavor.it" signInPage />
      <BannerAside pageSignIn />
    </div>
  </transition>
</template>

<script>
import FormSign from "@/components/organisms/FormSign";
import BannerAside from "@/components/organisms/BannerAside";
const to = "/";
const from = "/signup";
export default {};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
