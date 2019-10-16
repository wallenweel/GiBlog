<template>
  <section class="comment-list">
    Comment List
    <ul>
      <li v-for="n of 100" :key="n">Comment</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CommentList"
};
</script>

<style lang="scss" scoped>
.comment-list {
  position: relative;
}
</style>
