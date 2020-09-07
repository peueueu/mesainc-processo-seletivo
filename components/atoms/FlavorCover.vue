<template>
  <div class="cover">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cover {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: url("~assets/img/profilecover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 160px;
    z-index: 1;
    filter: blur(0.7px);
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>
