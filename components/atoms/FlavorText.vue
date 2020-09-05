<template>
  <p class="default-text">{{content}}</p>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.default-text {
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  color: $white;
}
</style>
