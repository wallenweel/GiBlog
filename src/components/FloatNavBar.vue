<template>
  <nav class="float-nav-bar" data-ui-float-nav>
    <div class="wrap">
      <div class="tray">
        <Button class="toggle-left" type="icon" color="transparent">
          <Icon><IconMenu /></Icon>
        </Button>
        <input class="search" @change="handleInputChange" :data-searched="searched" />
        <div class="placeholder">Search...</div>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconMenu from "./icons/Menu.vue";

export default {
  name: "FloatNavBar",
  data() {
    return {
      searched: null
    };
  },
  methods: {
    handleInputChange({ target }) {
      // console.log(target.value);
      this.searched = target.value || null;
    }
  },
  components: {
    Button,
    Icon,
    IconMenu
  }
};
</script>

<style lang="scss" scoped>
.float-nav-bar {
  height: 0;
  width: 0;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 9;

  > .wrap {
    width: var(--column-list-w);
    padding: 8px 0;
    justify-content: center;
    display: flex;
    position: relative;

    transform: translateX(var(--column-left-w));
  }
}

.tray {
  background-color: var(--float-nav-b-c);
  height: var(--float-nav-h);
  width: var(--float-nav-w);
  padding: 0 8px;
  font-size: 14px;
  align-items: center;
  display: flex;
}

input.search {
  background: var(--float-nav-search-bg);
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
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
    left: calc(48px * 1 + 12px);
    position: absolute;
    z-index: 0;
  }
}

button {
  &.toggle-left {
    color: var(--float-nav-icon-c);
    margin-left: -4px;
  }
}
</style>
