<template>
  <section class="wrap">
    <div class="placeholder"></div>
    <div class="container">
      ColumnComment
    </div>
  </section>
</template>

<script>
export default {
  name: "ColumnComment"
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--column-comment-bg-c);
  width: 100vw;
  height: 100vh;
  display: flex;

  margin-top: -56px;

  top: 100vh;
  left: 0;
  right: 0;
  position: fixed;
}

.placeholder {
  flex-shrink: 0;
  width: calc(var(--column-list-w) + var(--column-left-w));
}

.container {
  width: 100%;
  text-align: center;
}
</style>
