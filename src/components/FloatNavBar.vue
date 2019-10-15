<template>
  <nav class="float-nav-bar" data-ui-float-nav>
    <div class="wrap">
      <div class="tray">
        <template>
          <Button
            class="toggle-left"
            type="icon"
            @click.stop="toggleLeft"
            v-if="!left"
          >
            <Icon><IconMenu /></Icon>
          </Button>
          <Button
            class="toggle-left"
            type="icon"
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
      <div class="others">
        <Avatar class="avatar" />
        <Button class="toggle-list" type="icon" @click.stop="toggleList">
          <Icon :type="!list ? 'rounded' : 'two-tone'"><IconInbox /></Icon>
        </Button>
        <Button class="toggle-menu" type="icon">
          <Icon><IconMoreVert /></Icon>
        </Button>
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconMenu from "./icons/Menu.vue";
import IconBack from "./icons/Back.vue";
import IconInbox from "./icons/Inbox.vue";
import IconMoreVert from "./icons/MoreVert.vue";

export default {
  name: "FloatNavBar",
  props: {
    left: Boolean,
    list: Boolean
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
    },
    toggleList() {
      this.$emit("toggle-list", !this.list);
    }
  },
  components: {
    Avatar,
    Button,
    Icon,
    IconMenu,
    IconBack,
    IconInbox,
    IconMoreVert
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

.others {
  width: 100%;
  padding: 0 32px;
  position: absolute;
  align-items: center;
  display: flex;
  display: none;
}

.avatar {
  --avatar-sz: 44px;

  box-shadow: var(--float-nav-sd);
  display: none;
}

.toggle-list,
.toggle-menu {
  --button-sz: 38px;

  box-shadow: var(--float-nav-sd);
  background-color: var(--float-nav-b-c);
  height: var(--button-sz);
  width: var(--button-sz);
  color: var(--float-nav-icon-c);
  flex-shrink: 0;
}

.toggle-list {
  margin-left: auto;
}

.toggle-menu {
  margin-left: 8px;
}

.tray {
  box-shadow: var(--float-nav-sd);
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
  background-color: transparent;
  color: var(--float-nav-icon-c);
  display: none;
  position: relative;
  z-index: 1;
}
</style>
