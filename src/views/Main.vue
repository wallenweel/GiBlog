<template>
  <main class="main">
    <ColumnLeft />
    <ColumnList />
    <ColumnContent />
    <ColumnComment />
  </main>
</template>

<script>
import ColumnLeft from "@/components/ColumnLeft.vue";
import ColumnList from "@/components/ColumnList.vue";
import ColumnContent from "@/components/ColumnContent.vue";
import ColumnComment from "@/components/ColumnComment.vue";

export default {
  name: "Main",
  components: {
    ColumnLeft,
    ColumnList,
    ColumnContent,
    ColumnComment
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}
</style>
