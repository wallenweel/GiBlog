<template>
  <nav class="float-nav-bar" data-ui-float-nav>
    <div class="wrap">
      <div class="tray">
        <Button
          class="toggle-left"
          type="icon"
          color="transparent"
          @click.stop="$emit('toggle-left')"
        >
          <Icon><IconMenu /></Icon>
        </Button>
        <input
          class="search"
          :data-searched="searched"
          @change="handleInputChange"
        />
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
  > .wrap {
    padding: 8px 0;
    justify-content: center;
    display: flex;
  }
}

.tray {
  border-radius: 8px;
  background-color: var(--float-nav-b-c);
  height: var(--float-nav-tray-h);
  width: var(--float-nav-tray-w);
  font-size: 14px;
  padding: 0 8px;
  padding-left: 4px;
  border: 1px solid var(--border-c-lighter);
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
