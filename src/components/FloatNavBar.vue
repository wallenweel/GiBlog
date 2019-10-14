<template>
  <nav class="float-nav-bar" data-ui-float-nav>
    <div class="wrap">
      <div class="left">
        <Avatar class="avatar" />
      </div>
      <div class="tray">
        <template>
          <Button
            class="toggle-left"
            type="icon"
            color="transparent"
            @click.stop="toggleLeft"
            v-if="!left"
          >
            <Icon><IconMenu /></Icon>
          </Button>
          <Button
            class="toggle-left"
            type="icon"
            color="transparent"
            @click.stop="toggleLeft"
            v-if="left"
          >
            <Icon><IconBack /></Icon>
          </Button>
        </template>
        <input
          class="search"
          :data-searched="searched"
          @change="handleInputChange"
        />
        <div class="placeholder">{{ $t("search") }}...</div>
      </div>
      <div class="right"></div>
    </div>
  </nav>
</template>

<script>
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconMenu from "./icons/Menu.vue";
import IconBack from "./icons/Back.vue";

export default {
  name: "FloatNavBar",
  props: {
    left: Boolean
  },
  data() {
    return {
      searched: false
    };
  },
  computed: {
    avatar() {
      return this.$store.state.profile.avatar;
    }
  },
  methods: {
    handleInputChange({ target }) {
      this.searched = target.value || false;
    },
    toggleLeft() {
      this.$emit("toggle-left", !this.left);
    }
  },
  components: {
    Avatar,
    Button,
    Icon,
    IconMenu,
    IconBack
  }
};
</script>

<style lang="scss" scoped>
.float-nav-bar {
  margin-top: 6px;

  > .wrap {
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}

.left,
.right {
  width: 18%;
  align-items: center;
  justify-content: center;
  display: flex;
  display: none;
}

.avatar {
  --avatar-sz: 44px;

  box-shadow: 0 2px 4px 2px var(--float-nav-sd-c);
  margin: 0 auto;
  margin-left: auto;
  display: none;
}

.tray {
  box-shadow: 0 2px 4px 2px var(--float-nav-sd-c);
  border-radius: 8px;
  background-color: var(--float-nav-b-c);
  height: var(--float-nav-tray-h);
  width: var(--float-nav-tray-w);
  font-size: 14px;
  padding: 0 8px;
  padding-left: 4px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  position: relative;
}

input.search {
  background: var(--float-nav-search-bg);
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 16px;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 2;

  &[data-searched],
  &:focus {
    & + .placeholder {
      visibility: hidden;
    }
  }

  & + .placeholder {
    user-select: none;
    color: var(--text-info-c-light);
    padding-left: 16px;
    left: 0;
    position: absolute;
    z-index: 0;
  }
}

.toggle-left {
  color: var(--float-nav-icon-c);
  display: none;
  position: relative;
  z-index: 1;
}
</style>
