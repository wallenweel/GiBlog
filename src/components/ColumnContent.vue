<template>
  <section class="wrap">
    <div class="placeholder"></div>
    ColumnContent
  </section>
</template>

<script>
export default {
  name: "ColumnContent"
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  min-height: 200vh;
  display: flex;
}

.placeholder {
  flex-shrink: 0;
  width: calc(var(--column-list-w) + var(--column-left-w));
}
</style>
