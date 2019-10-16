<template>
  <section class="comment-editor" data-ui-comment-editor>
    <div class="wrap">
      <header class="user">
        <Avatar class="avatar" />
        <template v-if="!logined">
          <div class="info">
            <span class="name">User Name</span>
          </div>
          <Button class="logout">Logout</Button>
        </template>
        <template v-else>
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
      </header>
      <div class="editor">
        <textarea name="comment" placeholder="Leave a comment..."></textarea>
      </div>
    </div>
  </section>
</template>

<script>
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";

export default {
  name: "CommentEditor",
  data() {
    return {
      logined: true,
      username: null,
      password: null
    };
  },
  components: {
    Avatar,
    Button
  }
};
</script>

<style lang="scss" scoped>
.comment-editor {
  > .wrap {
    box-shadow: 0 -4px 4px 0px var(--float-nav-sd-c);
    border-radius: 12px 12px 0 0;
    background-color: var(--comment-b-c);
    flex-direction: column;
    display: flex;
    position: relative;
    margin: auto;
  }
}

.user {
  height: 100%;
  width: 100%;
  padding: 0 32px;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin: auto;

  .avatar {
    --avatar-sz: 34px;

    margin-right: 8px;
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

  button.login {
    background-color: var(--comment-login-b-c);
    height: var(--input-h);
    width: 96px;
    color: var(--primary-c);
    text-transform: uppercase;
    font-size: 12px;
    border: 1px solid var(--primary-c);
    margin-left: 8px;
  }
}

.editor {
  background-image: linear-gradient(to bottom, var(--comment-b-c) 80%, transparent);
  padding: 16px;
  padding-top: 0;

  textarea {
    resize: vertical;
    background: none;
    padding: 16px;
    height: 6em;
    width: 100%;
    font-size: 14px;
    outline: none;
    border: none;
    margin-bottom: 16px;
  }
}
</style>
