<template>
  <main
    id="main"
    data-ui-main
    :data-left-on="toggleLeft"
    :data-list-on="toggleList"
    :data-scroll-direction="scrollDirection"
  >
    <div data-ui-placeholder="left"></div>

    <FloatNavBar @toggle-left="toggleLeft = !toggleLeft" :left="toggleLeft" />
    <ColumnLeft v-model="toggleLeft" @focusedTag="onFocusedTag" />
    <ColumnList :show="toggleList" @focusedArticle="onFocusedArticle" />
    <ColumnContent @scroll="onContentScrolling" />
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
      toggleList: null,
      scrollDirection: null
    };
  },
  methods: {
    onFocusedTag() {
      this.toggleList = true;
    },
    onFocusedArticle() {
      this.toggleList = false;
    },
    onContentScrolling({ direction }) {
      this.scrollDirection = direction;
    }
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
  background-color: var(--main-bg-c);
}
</style>
