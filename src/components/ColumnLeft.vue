<template>
  <section class="columnLeft">
    <OwnerArea />

    <nav class="labels">
      <a href="#" class="label">Label 1</a>
      <a href="#" class="label">Label 2</a>
      <a href="#" class="label">Label 3</a>
      <a href="#" class="label">Label 4</a>
      <a href="#" class="label">Label 5</a>
      <a href="#" class="label">Label 6</a>
    </nav>
  </section>
</template>

<script>
import OwnerArea from "@/components/OwnerArea.vue";

export default {
  name: "ColumnLeft",
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
}
</style>
