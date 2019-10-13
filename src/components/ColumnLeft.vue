<template>
  <section class="column-left" data-ui-column-left>
    <div class="wrap">
      <OwnerArea />

      <h5 class="headline">Focused Tags</h5>
      <div class="no-focused-tags" v-if="!focusedTags.length">
        <span>No focused tags yet.</span>
      </div>
      <Tags
        :tags="tags.filter(({ id }) => focusedTags.includes(id))"
        @selected="subFocusedTag"
      />

      <h5 class="headline">All Tags</h5>
      <Tags :tags="tags" @selected="addFocusedTag" />

      <footer class="info">Powered by <a href="#">GiBlog</a> & Github</footer>
    </div>
    <div class="mask" @click="$emit('hide')"></div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import OwnerArea from "@/components/OwnerArea.vue";
import Tags from "./Tags.vue";

export default {
  name: "ColumnLeft",
  computed: {
    ...mapState({
      tags: state => state.tags || [],
      focusedTags: state => state.focusedTags || []
    })
  },
  methods: {
    ...mapMutations(["addFocusedTag", "subFocusedTag"])
  },
  components: {
    OwnerArea,
    Tags
  }
};
</script>

<style lang="scss" scoped>
.column-left {
  > .wrap {
    background-color: var(--column-left-bg-c);
    flex-shrink: 0;
    flex-direction: column;
    display: flex;
    z-index: 1;
  }

  > .mask {
    visibility: hidden;
    opacity: 0;
    background-color: var(--column-left-mask-bg-c);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    overflow: hidden;
  }
}

h5.headline {
  margin-bottom: 0;
  padding: 0 8px;
}

.no-focused-tags {
  color: var(--text-info-c-light);
  font-style: italic;
  font-size: 14px;
  margin-left: 16px;
  margin-top: 24px;
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
