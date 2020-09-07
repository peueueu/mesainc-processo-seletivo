<template>
  <div :id="id" class="input_wrapper">
    <input
      :placeholder="placeholder"
      class="input_field"
      :value="inputValue"
      @input="updateValue($event.target.value)"
      :type="type"
    />
  </div>
</template>

<script>
const _inputTypes = ["text", "email", "password", "checkbox"];

export default {
  data() {
    return {
      inputValue: ""
    };
  },
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: "text",
      validator: value => _inputTypes.includes(value)
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.input_wrapper {
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  .input_field {
    background: #e5e5e5;
    padding: 18px 0 18px 30px;
    width: 100%;
    border-left: 60px solid $mediumGrey;
  }
}
</style>
