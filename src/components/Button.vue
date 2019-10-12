<template>
  <button
    :data-type="type"
    :style="{
      backgroundColor: color
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    // "icon" | "float" | ...
    type: String,
    color: String
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  background-color: var(--btn-normal-bg-c);
  line-height: 0;
  outline: none;
  border: none;
  padding: 0;

  &[data-type="icon"] {
    border-radius: 48px;
    padding: 6px;

    &:active {
      opacity: 0.65;
    }
  }
}
</style>
