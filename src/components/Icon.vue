<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    ref="svg"
    :data-type="type || 'rounded'"
    :width="size || width || 24"
    :height="size || height || 24"
    :viewBox="`0 0 ${size || width || 24} ${size || height || 24}`"
    :name="name"
    :fill="color || 'currentColor'"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: String,
    name: String,
    size: Number || String,
    height: Number || String,
    width: Number || String,
    color: String
  }
};
</script>

<style lang="scss">
svg {
  g[data-type] {
    display: none;
  }

  $types: "filled", "outlined", "rounded", "two-tone", "sharp";

  @each $type in $types {
    &[data-type="#{$type}"] g[data-type="#{$type}"] {
      display: block;
    }
  }
}
</style>
