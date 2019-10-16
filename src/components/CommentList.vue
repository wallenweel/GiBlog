<template>
  <section class="comment-list" data-ui-comment-list>
    <div class="wrap">
      <ul class="list">
        <li class="item" v-for="n of 50" :key="n">
          <article class="comment">
            <header class="info">
              <Avatar />
              <div class="name">Nick Name</div>
              <div class="date">{{ $d(new Date(), "short") }}</div>
            </header>
            <div class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              minus nihil quos enim ut sint qui voluptas atque placeat expedita,
              impedit, ducimus hic cupiditate praesentium labore adipisci iure
              dolore.
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "CommentList",
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.comment-list {
  > .wrap {
    padding: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
}
</style>
