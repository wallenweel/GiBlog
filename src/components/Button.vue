<template>
  <button
    :data-type="type || 'normal'"
    :style="{
      background: color || null
    }"
    @click="ev => $emit('click', ev)"
    @mousedown="ev => $emit('active', ev, 1)"
    @mouseup="ev => $emit('active', ev, 0)"
    @touchstart="ev => $emit('active', ev, 1)"
    @touchend="ev => $emit('active', ev, 0)"
    @focus="ev => $emit('focus', ev)"
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
  --button-sz: 48px;

  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: var(--btn-normal-bg-c);
  outline: none;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  display: flex;

  &[data-type="normal"] {
    border-radius: 2px;
    padding: 4px 6px;
  }

  &[data-type="clear"] {
    background: none;
  }

  &[data-type="icon"] {
    border-radius: var(--button-sz);
    height: var(--button-sz);
    width: var(--button-sz);
    line-height: 0;
  }

  &:active {
    opacity: 0.65;
  }
}
</style>
