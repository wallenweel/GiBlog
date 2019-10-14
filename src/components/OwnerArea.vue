<template>
  <header class="ownerArea" data-ui-owner-area>
    <div class="cover">
      <span :style="{ backgroundImage: avatar && `url(${avatar})` }"></span>
    </div>
    <div class="user">
      <Avatar class="avatar" />
      <div class="info">
        <span class="name" v-if="name">{{ name }}</span>
        <span class="name blank" data-ui-blank v-else>
          &#xa1;&#xa1;&#xa1;&nbsp;&nbsp;&#xa1;&#xa1;&#xa1;
        </span>
        <span class="email" v-if="email">{{ email }}</span>
        <span class="email blank" data-ui-blank v-else>
          &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
        </span>
      </div>
      <div class="description" v-if="description">{{ description }}</div>
      <div class="description blank" data-ui-blank v-else>
        &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
      </div>
    </div>
  </header>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "OwnerArea",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    name() {
      return this.profile.name;
    },
    email() {
      return this.profile.email;
    },
    avatar() {
      return this.profile.avatar;
    },
    description() {
      return this.profile.description;
    },
    home() {
      return this.profile.home;
    },
    updated() {
      return this.profile.updated;
    }
  },
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.ownerArea {
  height: calc(var(--column-left-w) * 0.618);
  position: relative;
  overflow: hidden;

  .blank {
    color: var(--owner-area-t-c) !important;
  }
}

.cover {
  background-color: var(--blank-c-light);

  left: -5px;
  bottom: -10px;
  right: -5px;
  top: -10px;
  position: absolute;

  > span {
    $s: 100%;

    filter: blur(5px) brightness(0.75) grayscale(0.25);

    background: none no-repeat 50% 50%;
    background-size: cover;
    width: $s;
    height: $s;
    display: block;
  }
}

.user {
  color: var(--owner-area-t-c);
  font-size: 12px;
  padding: 8px;
  padding-top: 0;

  flex-wrap: wrap;
  flex-direction: column;
  display: flex;

  position: relative;
  z-index: 2;

  .avatar {
    margin: 8px;
  }
}

.info {
  padding-left: 8px;
  flex-direction: column;
  justify-content: center;
  display: flex;

  .name {
    font-size: 14px;
    font-weight: bold;
  }
}

.description {
  opacity: 0.72;
  width: 100%;
  margin-top: 12px;
  word-wrap: break-word;
}
</style>
