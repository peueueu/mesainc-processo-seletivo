<template>
  <h1 class="title">{{content}}</h1>
</template>

<script>
export default {
  name: "FlavorTitle",
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 3rem;
  margin: 0 auto;
  color: $white;
  font-weight: bold;
}
</style>
