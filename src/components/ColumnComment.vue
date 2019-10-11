<template>
  <section class="columnComment">
    <div class="placeholder"></div>
    <div class="container">
      <div class="comments">
        ColumnComment
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColumnComment"
};
</script>

<style lang="scss" scoped>
.columnComment {
  background-color: var(--column-comment-bg-c);
  // width: 100vw;
  width: var(--column-comment-w);
  height: var(--column-comment-h);
  display: flex;

  border-left: 1px solid var(--border-c-lighter);
  // margin-top: -56px;

  top: 0;
  // left: 0;
  right: 0;
  position: fixed;
  z-index: 5;
}

.placeholder {
  flex-shrink: 0;
  // width: calc(var(--column-list-w) + var(--column-left-w));
}

.container {
  width: 100%;
  text-align: center;
  overflow-y: auto;
  flex-direction: column;
  display: flex;
}

.comments {
  min-height: 200vh;
}
</style>
