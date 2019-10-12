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
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 6;

  > .wrap {
    background-color: var(--column-left-bg-c);
    width: var(--column-left-w);
    height: var(--column-left-h);
    flex-shrink: 0;
    flex-direction: column;
    display: flex;

    left: calc(var(--column-left-w) * -1);
    position: relative;

    transition: transform 0.25s ease;
    transform: translateX(var(--column-left-w));
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
