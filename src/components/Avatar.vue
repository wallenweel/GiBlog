<template>
  <div class="avatar" data-ui-avatar>
    <span :style="{ backgroundImage: avatar && `url(${avatar})` }"></span>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  computed: {
    avatar() {
      return this.$store.state.profile.avatar;
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: var(--avatar-sz);
  background: var(--blank-c-light) no-repeat 50% 50%;
  background-size: cover;
  width: var(--avatar-sz);
  height: var(--avatar-sz);
  border: 2px solid var(--owner-area-t-c);

  > span {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    display: block;
  }
}
</style>
