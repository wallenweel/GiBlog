<template>
  <section class="comment-list" data-ui-comment-list>
    <div class="wrap">
      <div class="comments">
        <article class="comment" v-for="n of 50" :key="n">
          <header class="info">
            <Avatar class="avatar" />
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
      </div>
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
}

.comments {
  padding-bottom: 120px;
}

.comment {
  padding-left: 32px;
  margin-bottom: 12px;
  position: relative;

  .info {
    color: var(--text-c-light);
    font-size: 12px;
    align-items: center;
    display: flex;
    position: relative;

    .avatar {
      --avatar-sz: 26px;

      left: -32px;
      position: absolute;
    }

    .name {
      margin-right: 8px;
    }
  }

  .content {
    font-size: 14px;
    padding: 6px 0;
  }
}
</style>
