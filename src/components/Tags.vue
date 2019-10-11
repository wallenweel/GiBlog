<template>
  <nav class="tags">
    <a class="tag" v-if="!(tags || []).length">
      <span>no tag</span>
    </a>
    <a
      class="tag"
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
    tags: Array
  }
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 6px 8px;

  > a {
    border-radius: 2px;
    background-color: currentColor;
    font-size: 12px;
    padding: 4px 6px;
    margin: 4px 2px;
    display: inline-block;
    position: relative;

    &::before {
      content: "";
      opacity: 0.5;
      box-shadow: 0 1px 2px 1px currentColor;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      display: block;
    }

    > span {
      color: white;
      position: relative;
    }

    &:hover {
      &::before {
        transition: box-shadow 0.25s ease;
        box-shadow: 0 2px 4px 2px currentColor;
      }
    }
  }
}
</style>
