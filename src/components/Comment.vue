<template>
  <section class="comment">
    <div class="wrap">
      Comments
    </div>
  </section>
</template>

<script>
export default {
  name: "Comment"
};
</script>

<style lang="scss" scoped>
.comment {
  position: sticky;
  bottom: 0;
  // position: relative;
  > .wrap {
    background-color: #dddddd;
    height: 20vh;
  }
}
</style>
