<template>
  <nav :class="['tags', tiny ? 'tiny' : '']" :data-type-tiny="tiny">
    <a
      class="tag active"
      @click="handleSelected(tag.id)"
      v-for="tag of tags"
      :style="{ color: `#${tag.color}` }"
      :key="tag.id"
    >
      <span>{{ tag.name }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tags: Array,
    tiny: Boolean
  },
  methods: {
    handleSelected(tag) {
      this.$emit("selected", tag);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 6px 8px;

  &[data-type-tiny] {
    .tag {
      &:hover {
        > span {
          opacity: 0.75;
        }
      }
    }
  }
}

.tag {
  cursor: default;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.35;
  padding: 4px 6px;
  margin-top: 6px;
  margin-right: 4px;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: "";
    border-radius: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    display: block;
  }

  &::after {
    background-color: var(--tag-none-bg-c);
  }

  > span {
    opacity: 0.75;
    color: var(--tag-text-c);
    // text-shadow: 1px 1px 0px rgba(46, 46, 46, 0.25);
    position: relative;
    z-index: 3;
  }

  &.active {
    cursor: pointer;

    &::before {
      box-shadow: 0 1px 2px 1px currentColor;
      color: currentColor;
      opacity: 0.65;
      z-index: 2;
    }

    &::after {
      filter: brightness(0.98);
      background-color: currentColor;
      z-index: 1;
    }

    &:hover {
      &::before {
        transition: box-shadow 0.25s ease;
        box-shadow: 0 2px 4px 2px currentColor;
      }

      span {
        opacity: 1;
      }
    }
  }
}

.tags.tiny {
  padding: 0;
  .tag {
    font-size: 9px;
    padding: 2px 4px;

    &::before,
    &::after {
      box-shadow: none;
    }
  }
}
</style>
