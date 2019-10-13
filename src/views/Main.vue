<template>
  <main
    id="main"
    data-ui-main
    :data-left-on="toggleLeft"
    :data-list-on="toggleList"
  >
    <FloatNavBar @toggle-left="toggleLeft = !toggleLeft" />
    <ColumnLeft @hide="toggleLeft = false" />
    <ColumnList />
    <ColumnContent />
  </main>
</template>

<script>
import FloatNavBar from "@/components/FloatNavBar.vue";
import ColumnLeft from "@/components/ColumnLeft.vue";
import ColumnList from "@/components/ColumnList.vue";
import ColumnContent from "@/components/ColumnContent.vue";

export default {
  name: "Main",
  data() {
    return {
      toggleLeft: null,
      toggleList: null
    };
  },
  components: {
    FloatNavBar,
    ColumnLeft,
    ColumnList,
    ColumnContent
  }
};
</script>

<style lang="scss">
#main {
  flex-wrap: wrap;
  display: flex;
  overflow: hidden;
}
</style>
