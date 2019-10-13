<template>
  <main id="main" data-ui-main>
    <FloatNavBar @toggle-left="toggleLeft = !toggleLeft" />
    <ColumnLeft :data-on="toggleLeft" />
    <ColumnList />
    <ColumnContent />
    <ColumnComment v-if="false" />
  </main>
</template>

<script>
import FloatNavBar from "@/components/FloatNavBar.vue";
import ColumnLeft from "@/components/ColumnLeft.vue";
import ColumnList from "@/components/ColumnList.vue";
import ColumnContent from "@/components/ColumnContent.vue";
import ColumnComment from "@/components/ColumnComment.vue";

export default {
  name: "Main",
  data() {
    return {
      toggleLeft: null
    };
  },
  components: {
    FloatNavBar,
    ColumnLeft,
    ColumnList,
    ColumnContent,
    ColumnComment
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
