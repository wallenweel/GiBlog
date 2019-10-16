<template>
  <div class="avatar" data-ui-avatar>
    <span :style="{ backgroundImage: avatar && `url('${avatar}')` }">
      <Icon class="blank" type="rounded" v-if="!avatar"><IconPerson /></Icon>
    </span>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import IconPerson from "./icons/Person.vue";

export default {
  name: "Avatar",
  computed: {
    avatar() {
      return this.$store.state.profile.avatar;
    }
  },
  components: {
    Icon,
    IconPerson
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: var(--avatar-sz);
  width: var(--avatar-sz);
  height: var(--avatar-sz);
  border: 2px solid var(--owner-area-t-c);
  flex-shrink: 0;
  overflow: hidden;

  > span {
    background: var(--blank-c-light) no-repeat 50% 50%;
    background-size: cover;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .blank {
    color: var(--blank-c-light);
    filter: brightness(0.75);
  }
}
</style>
