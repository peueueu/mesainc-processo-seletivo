<template>
  <FlavorCover>
    <FlavorAvatar :userName="name" :userAvatar="profileImage" />
  </FlavorCover>
</template>

<script>
import FlavorAvatar from "@/components/atoms/FlavorAvatar";
import FlavorCover from "@/components/atoms/FlavorCover";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    profileImage: String,
    required: true
  }
};
</script>

<style lang="scss">
  
</style>
