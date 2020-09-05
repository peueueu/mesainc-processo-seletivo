<template>
  <transition>
    <div class="container">
      <BannerAside />
      <FormSign formTitle="Create Account" :signInPage="false" />
    </div>
  </transition>
</template>

<script>
import FormSign from "@/components/organisms/FormSign.vue";
import BannerAside from "@/components/organisms/BannerAside.vue";
export default {};
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
}
</style>
