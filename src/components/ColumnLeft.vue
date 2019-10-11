<template>
  <section class="wrap">
    <div>
      ddd
    </div>
    ColumnLeft
  </section>
</template>

<script>
export default {
  name: "ColumnLeft"
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--column-left-bg-c);
  width: var(--column-left-w);
  height: var(--column-left-h);
  flex-shrink: 0;
  display: flex;

  top: 0;
  left: 0;
  position: fixed;
  z-index: 6;
}
</style>
