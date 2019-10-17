<template>
  <section class="comment-editor" data-ui-comment-editor>
    <div class="wrap">
      <header class="user">
        <Avatar class="avatar" />
        <template v-if="!hasLogin">
          <div class="form">
            <div class="placeholder">User Name</div>
            <input
              type="text"
              name="username"
              :data-inputed="!!username"
              v-model="username"
            />
            <div class="placeholder">Password</div>
            <input
              type="password"
              name="password"
              :data-inputed="!!password"
              v-model="password"
            />
          </div>
          <Button class="login">Login</Button>
        </template>
        <template v-else>
          <div class="info">
            <span class="name">User Name</span>
          </div>
          <Button class="logout">Logout</Button>
        </template>
      </header>
      <div class="editor">
        <textarea
          name="comment"
          placeholder="Leave a comment..."
          v-model="comment"
        ></textarea>
        <Button class="send" :disabled="!comment" type="icon">
          <Icon class="icon"><IconSend /></Icon>
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconSend from "./icons/Send.vue";

export default {
  name: "CommentEditor",
  data() {
    return {
      hasLogin: false,
      username: null,
      password: null,
      comment: null
    };
  },
  components: {
    Avatar,
    Button,
    Icon,
    IconSend
  }
};
</script>

<style lang="scss" scoped>
.comment-editor {
  > .wrap {
    box-shadow: 0 -4px 4px 0px var(--float-nav-sd-c);
    border-radius: 12px 12px 0 0;
    background-image: linear-gradient(
      to bottom,
      var(--comment-bg-c) 76%,
      transparent
    );
    flex-direction: column;
    display: flex;
    position: relative;
  }
}

.user {
  height: 100%;
  width: 100%;
  padding: 6px 32px;
  align-items: center;
  flex-shrink: 0;
  display: flex;

  .avatar {
    --avatar-sz: 34px;

    margin-right: 8px;
  }

  .info {
    font-size: 12px;
  }

  .form {
    width: 100%;
    color: var(--text-c-darker);
    font-size: 12px;
    align-items: center;
    display: flex;

    --input-username-w: 100%;
    --input-password-w: 100%;
    --input-h: 28px;
    --input-indent: 1.25em;

    input {
      opacity: 0.65;
      border-radius: 60px;
      background: none;
      line-height: 1;
      background-color: var(--comment-login-b-c);
      height: var(--input-h);
      color: var(--primary-c);
      text-indent: var(--input-indent);
      outline: none;
      padding: 0;
      border: 1px solid var(--border-c-lighter);
      margin: 0 2px;
      position: relative;
      z-index: 1;

      &[name="username"] {
        width: var(--input-username-w);
      }

      &[name="password"] {
        width: var(--input-password-w);
      }

      &:focus,
      &[data-inputed] {
        opacity: 1;
        border: 1px solid var(--primary-c);

        + .placeholder {
          visibility: hidden;
          opacity: 0;
        }
      }
    }

    .placeholder {
      height: var(--input-h);
      width: 0;
      white-space: nowrap;
      text-indent: var(--input-indent);
      align-items: center;
      display: flex;
      position: relative;
      z-index: 0;
    }
  }

  button.login,
  button.logout {
    background-color: var(--comment-login-b-c);
    height: var(--input-h);
    width: 96px;
    color: var(--primary-c);
    text-transform: uppercase;
    font-size: 12px;
    border: 1px solid var(--primary-c);
    margin-left: 8px;
  }

  button.logout {
    margin-left: auto;
  }
}

.editor {
  height: var(--comment-editor-h);
  padding: 0 16px;

  textarea {
    resize: vertical;
    background: none;
    padding: 16px;
    height: 7em;
    width: 100%;
    font-size: 14px;
    outline: none;
    border: none;
  }

  .send {
    --button-sz: 40px;

    box-shadow: 0px 4px 8px var(--float-nav-sd-c);
    background-color: var(--primary-c);
    color: var(--comment-login-b-c);
    bottom: 6px;
    right: 16px;
    position: absolute;

    &:disabled {
      background-color: var(--btn-disabled-bg-c);
    }

    .icon {
      transform: rotate(-35deg);
      right: -2px;
      top: -2px;
      position: relative;
    }
  }
}
</style>
