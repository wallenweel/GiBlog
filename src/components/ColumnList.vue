<template>
  <section class="wrap">
    ColumnList
  </section>
</template>

<script>
export default {
  name: "ColumnList"
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--column-list-bg-c);
  width: var(--column-list-w);
  height: var(--column-list-h);
  flex-shrink: 0;
  display: flex;

  top: 0;
  left: var(--column-left-w);
  position: fixed;
  z-index: 6;
}
</style>
