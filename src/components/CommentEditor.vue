<template>
  <section class="comment-editor">
    <div class="wrap">
      Comment Editor
    </div>
  </section>
</template>

<script>
export default {
  name: "CommentEditor"
};
</script>

<style lang="scss" scoped>
.comment-editor {
  top: 0;
  bottom: -10vh;
  position: sticky;
  z-index: 1;

  > .wrap {
    background-color: #dddddd;
    height: 20vh;
  }
}
</style>
