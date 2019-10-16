<template>
  <main
    id="main"
    data-ui-main
    :data-left-on="toggleLeft"
    :data-list-on="toggleList"
    :data-scroll-direction="scrollDirection"
    :data-scroll-exceeded="scrollExceeded"
  >
    <div class="wrap">
      <div data-ui-placeholder="left"></div>
      <div data-ui-mask="left" @click="toggleLeft = !toggleLeft"></div>

      <FloatNavBar
        @toggle-left="onToggleLeft"
        @toggle-list="onToggleList"
        :left="toggleLeft"
        :list="toggleList"
      />
      <FloatFlipBar />
      <ColumnLeft v-model="toggleLeft" @focusedTag="onFocusedTag" />
      <ColumnList v-model="toggleList" @focusedArticle="onFocusedArticle" />
      <ColumnContent @scroll="onContentScrolling" />
    </div>
  </main>
</template>

<script>
import FloatNavBar from "@/components/FloatNavBar.vue";
import FloatFlipBar from "@/components/FloatFlipBar.vue";
import ColumnLeft from "@/components/ColumnLeft.vue";
import ColumnList from "@/components/ColumnList.vue";
import ColumnContent from "@/components/ColumnContent.vue";

export default {
  name: "Main",
  data() {
    return {
      toggleLeft: null,
      toggleList: null,
      scrollDirection: null,
      scrollExceeded: null
    };
  },
  created() {
    document.body.setAttribute("data-ui-view", this.$options.name);
  },
  methods: {
    onFocusedTag() {
      this.toggleList = true;
    },
    onFocusedArticle() {
      this.toggleList = false;
    },
    onContentScrolling({ direction, exceeded }) {
      this.scrollExceeded = exceeded;
      this.scrollDirection = direction;
    },
    onToggleLeft() {
      this.toggleLeft = !this.toggleLeft;
    },
    onToggleList() {
      this.toggleLeft = false;
      this.toggleList = !this.toggleList;
    }
  },
  components: {
    FloatNavBar,
    FloatFlipBar,
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
