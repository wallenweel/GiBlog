<template>
  <section class="column-left" data-ui-column-left>
    <div class="wrap">
      <Button
        class="hide-left"
        type="icon"
        color="transparent"
        @click="$emit('toggle', false)"
        v-if="show"
      >
        <Icon><IconBack /></Icon>
      </Button>

      <OwnerArea />

      <h5 class="headline">Focused Tags</h5>
      <div class="no-focused-tags" v-if="!focusedTags.length">
        <span>{{ show }}No focused tags yet.</span>
      </div>
      <Tags
        :tags="tags.filter(({ id }) => focusedTags.includes(id))"
        @selected="subFocusedTag"
      />

      <h5 class="headline">All Tags</h5>
      <Tags :tags="tags" @selected="handleFocusedTag" v-if="tags.length" />
      <nav class="tags blank" data-ui-blank @click="handleFocusedTag" v-else>
        <span>&#xa1;&#xa1;</span>
        <span>&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;</span>
        <span>&#xa1;&#xa1;&#xa1;</span>
        <span>&#xa1;&#xa1;&#xa1;&#xa1;</span>
        <span>&#xa1;&#xa1;</span>
        <span>&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;</span>
      </nav>

      <footer class="info">Powered by <a href="#">GiBlog</a> & Github</footer>
    </div>
    <div class="mask" @click="$emit('toggle', false)"></div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import OwnerArea from "@/components/OwnerArea.vue";
import Tags from "./Tags.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconBack from "./icons/Back.vue";

export default {
  name: "ColumnLeft",
  model: {
    prop: "show",
    event: "toggle"
  },
  props: {
    show: Boolean
  },
  computed: {
    ...mapState({
      tags: state => state.tags || [],
      focusedTags: state => state.focusedTags || []
    })
  },
  methods: {
    ...mapMutations(["addFocusedTag", "subFocusedTag"]),

    handleFocusedTag(tag) {
      this.addFocusedTag(tag);

      if (this.show) {
        this.$emit("focusedTag", tag);
      }
    }
  },
  components: {
    OwnerArea,
    Tags,
    Button,
    Icon,
    IconBack
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

  .blank {
    &.tags {
      padding: 16px;
      overflow-wrap: break-word;

      > span {
        display: inline-block;
        font-size: 26px;
        margin-right: 4px;
      }
    }
  }
}

button.hide-left {
  color: #ffffff;
  padding: 12px;
  display: none;
  right: 0;
  top: -8px;
  position: absolute;
  z-index: 9;
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
