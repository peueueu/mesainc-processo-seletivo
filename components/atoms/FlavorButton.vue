<template>
  <button id="default-btn" v-on="$listeners" :class="className">{{name}}</button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#default-btn {
  padding: 14px 72px;
  background: $primaryColor;
  border: none;
  font-size: 18px;
  border-radius: 50px;
  color: white;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
  }
}
</style>
