<template>
  <header class="ownerArea">
    <div class="cover">
      <span :style="{ backgroundImage: `url(${avatar})` }"></span>
    </div>
    <div class="user">
      <div class="avatar">
        <span :style="{ backgroundImage: `url(${avatar})` }"></span>
      </div>
      <div class="info">
        <span class="name">{{ name }}</span>
        <span class="email">{{ email }}</span>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </header>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped>
.ownerArea {
  height: calc(var(--column-left-w) * 0.618);
  position: relative;
  overflow: hidden;
}

.cover {
  background-color: #222222;

  left: -5px;
  bottom: -10px;
  right: -5px;
  top: -10px;
  position: absolute;

  > span {
    $s: 100%;

    filter: blur(5px);
    opacity: 0.5;

    background: #fff no-repeat 50% 50%;
    background-size: cover;
    width: $s;
    height: $s;
    display: block;
  }
}

.user {
  color: #ffffff;
  font-size: 12px;
  padding: 8px;

  flex-wrap: wrap;
  display: flex;

  position: relative;
  z-index: 2;
}

.avatar {
  > span {
    $s: 46px;
    border-radius: $s / 2;
    background: #fff no-repeat 50% 50%;
    background-size: cover;
    width: $s;
    height: $s;
    margin: 8px;
    display: block;
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
  margin-top: 12px;
}
</style>
