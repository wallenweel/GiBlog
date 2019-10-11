<template>
  <section class="columnLeft">
    <OwnerArea />

    <h5>Tags</h5>

    <Tags :tags="tags" />

    <footer class="info">Powered by <a href="#">GiBlog</a> & Github</footer>
  </section>
</template>

<script>
import OwnerArea from "@/components/OwnerArea.vue";
import Tags from "./Tags.vue";

export default {
  name: "ColumnLeft",
  computed: {
    tags() {
      return this.$store.state.tags || [];
    }
  },
  components: {
    OwnerArea,
    Tags
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

footer.info {
  width: 100%;
  color: var(--text-c-dark);
  font-size: 12px;
  text-align: center;
  padding: 8px;
  bottom: 0;
  position: absolute;
}
</style>
