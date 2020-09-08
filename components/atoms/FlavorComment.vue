<template>
  <textarea
    name="comment"
    id="comment"
    rows="6"
    v-model="review"
    @input="$emit('input', $event.target.value)"
    maxlength="140"
    placeholder="Max.140 characters"
  ></textarea>
</template>

<script>
export default {
  data() {
    return {
      review: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#comment {
  width: 300px;
  height: 100px;
  resize: none;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid $mediumGrey;
  margin-top: 10px;
}
</style>
