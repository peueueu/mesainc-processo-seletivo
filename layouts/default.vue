<template>
  <div>
    <notifications group="success" position="bottom center" />
    <notifications group="error" position="bottom center" />
    <Nuxt />
  </div>
</template>

<script>
</script>

<style lang="scss">
.vue-notification {
  padding: 15px;
  margin: 0 5px 5px;
  font-size: 16px;

  color: #ffffff;
  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
.vue-notification-group {
  width: 450px !important;
  margin-bottom: 40px;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

.vue-notification-wrapper {
  padding: 15px !important;
}

.vue-notification-template {
  height: 100px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);

  .notification-title {
    font-size: 1.35rem;
    margin-bottom: 10px;
    text-align: center;
  }
  .notification-content {
    font-size: 1.025rem;
    text-align: center;
  }
}
</style>
