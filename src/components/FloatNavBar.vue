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
          :data-inputed="inputed"
          @change="handleInputChange"
        />
        <div class="placeholder">{{ $t("search") }}...</div>
      </div>
      <div class="others">
        <Avatar class="avatar" :url="avatar" />
        <Button class="action toggle-list" type="icon" @click.stop="toggleList">
          <Icon :type="!list ? 'outlined' : 'two-tone'"><IconInbox /></Icon>
        </Button>
        <div class="spacer"></div>
        <Button class="action sync" type="icon">
          <Icon><IconSync /></Icon>
        </Button>
        <Button class="action toggle-menu" type="icon">
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
import IconSync from "./icons/Sync.vue";
import IconMoreVert from "./icons/MoreVert.vue";

export default {
  name: "FloatNavBar",
  props: {
    left: Boolean,
    list: Boolean
  },
  data() {
    return {
      inputed: false
    };
  },
  computed: {
    avatar() {
      return this.$store.state.profile.avatar;
    }
  },
  methods: {
    handleInputChange({ target }) {
      this.inputed = !!target.value || false;
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
    IconSync,
    IconMoreVert
  }
};
</script>

<style lang="scss" scoped>
.float-nav-bar {
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

  .spacer {
    margin: auto;
  }
}

.avatar {
  --avatar-sz: 38px;

  box-shadow: var(--float-nav-sd);
  margin-right: 8px;
  display: none;
}

button.action {
  --button-sz: 38px;

  box-shadow: var(--float-nav-sd);
  background-color: var(--float-nav-b-c);
  color: var(--float-nav-icon-c);
  flex-shrink: 0;
}

.toggle-menu {
  margin-left: 8px;
}

.tray {
  box-shadow: var(--float-nav-sd);
  border-radius: var(--float-nav-tray-h);
  background-color: var(--float-nav-b-c);
  height: var(--float-nav-tray-h);
  width: var(--float-nav-tray-w);
  font-size: 14px;
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

  &[data-inputed],
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
  height: 48px;
  width: 48px;
  background-color: transparent;
  color: var(--float-nav-icon-c);
  flex-shrink: 0;
  display: none;
  position: relative;
  z-index: 1;
}
</style>
