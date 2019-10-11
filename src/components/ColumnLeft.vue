<template>
  <section class="columnLeft">
    <OwnerArea />

    <h5>Tags</h5>

    <nav class="tags">
      <a
        href="#"
        class="tag"
        v-for="tag of tags"
        :data-id="tag.id"
        :style="{ color: `#${tag.color}` }"
        :key="tag.id"
      >
        <span>{{ tag.name }}</span>
      </a>
    </nav>
  </section>
</template>

<script>
import OwnerArea from "@/components/OwnerArea.vue";

export default {
  name: "ColumnLeft",
  computed: {
    tags() {
      return this.$store.state.tags;
    }
  },
  components: {
    OwnerArea
  }
};
</script>

<style lang="scss" scoped>
.columnLeft {
  background-color: var(--column-left-bg-c);
  width: var(--column-left-w);
  height: var(--column-left-h);
  flex-shrink: 0;
  flex-direction: column;
  display: flex;

  top: 0;
  left: 0;
  position: fixed;
  z-index: 6;

  > h5 {
    margin-bottom: 0;
    padding: 0 8px;
  }
}

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
