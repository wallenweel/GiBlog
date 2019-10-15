<template>
  <button
    :data-type="type"
    :style="{
      backgroundColor: color
    }"
    @click="ev => $emit('click', ev)"
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
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: var(--btn-normal-bg-c);
  line-height: 0;
  outline: none;
  border: none;
  padding: 0;
  display: flex;

  &[data-type="icon"] {
    border-radius: 48px;
    padding: 6px;
    justify-content: center;
    align-items: center;

    &:active {
      opacity: 0.65;
    }
  }
}
</style>
