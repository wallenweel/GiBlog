<template>
  <section class="comment-list" data-ui-comment-list>
    <div class="wrap">
      <div class="comments">
        <template v-if="comments">
          <article class="comment" v-for="n of 50" :key="n">
            <header class="user">
              <Avatar class="avatar" />
              <div class="name">Nick Name</div>
              <div class="date">{{ $d(new Date(), "short") }}</div>
              <Button class="reply" type="clear">
                <Icon class="icon"><IconReply /></Icon>
              </Button>
            </header>
            <div class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              minus nihil quos enim ut sint qui voluptas atque placeat expedita,
              impedit, ducimus hic cupiditate praesentium labore adipisci iure
              dolore.
            </div>
          </article>
        </template>
        <template>
          <article class="comment blank" data-ui-blank v-for="n of 50" :key="n">
            <header class="user">
              <Avatar class="avatar" />
              <div class="name">&#xa1;&#xa1;&#xa1;&#xa1;</div>
              <div class="date">&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;</div>
              <Button class="reply" type="clear">
                <Icon class="icon"><IconReply /></Icon>
              </Button>
            </header>
            <div class="content">
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
              &#xa1;&#xa1;&#xa1;
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </div>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconReply from "./icons/Reply.vue";

export default {
  name: "CommentList",
  data() {
    return {
      comments: null
    };
  },
  components: {
    Avatar,
    Button,
    Icon,
    IconReply
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

  .user {
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

    .reply {
      height: 22px;
      color: inherit;
      margin-left: auto;

      .icon {
        height: 16px;
      }
    }
  }

  .content {
    font-size: 13px;
    padding: 6px 0;
  }

  &.blank {
    .user {
      color: inherit !important;
    }
  }
}
</style>
