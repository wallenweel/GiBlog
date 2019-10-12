<template>
  <section class="columnContent" data-ui-column-content>
    <div class="placeholder left"></div>
    <article class="article">
      <header>
        <h1 class="title">{{ article.title }}</h1>
        <div class="meta">
          <div class="created">
            Created:
            <span v-if="article.created">
              {{ article.created | moment("calendar") }}
            </span>
          </div>
          <div class="updated">
            Updated:
            <span v-if="article.updated">
              {{ article.updated | moment("calendar") }}
            </span>
          </div>
          <div class="comments">
            Comments: <span>{{ article.comments }}</span>
          </div>
        </div>
        <Tags :tags="article.tags" :tiny="true" />
      </header>
      <div class="content markdown-body" v-html="content"></div>
    </article>
    <!-- <div class="placeholder right"></div> -->
  </section>
</template>

<script>
import Tags from "./Tags.vue";

export default {
  name: "ColumnContent",
  data() {
    return {
      content: ""
    };
  },
  computed: {
    article() {
      const state = this.$store.state;
      return state.article || (state.articles || [])[0] || {};
    }
  },
  methods: {
    async renderMarkdown() {
      if (!this.article.content) return;

      const [, html] = await this.$store.dispatch(
        "getMarkdown",
        this.article.content
      );

      this.content = html;
    }
  },
  watch: {
    article() {
      this.renderMarkdown();
    }
  },
  components: {
    Tags
  }
};
</script>

<style lang="scss" scoped>
.columnContent {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.placeholder {
  flex-shrink: 0;

  &.left {
    width: calc(var(--column-list-w) + var(--column-left-w));
  }
  &.right {
    width: var(--column-comment-w);
  }
}

.article {
  width: inherit;
  padding: 16px;

  > header {
    // border-bottom: 1px solid var(--border-c-lighter);
    background-color: var(--article-header-bg-c);
    padding: 8px;
    margin-bottom: 28px;
  }
}

.title {
  font-size: 18px;
  margin: 8px 0;
}

.meta {
  font-size: 10px;
  display: flex;

  > div {
    margin-right: 8px;
    color: var(--text-c-light);

    > span {
      color: var(--text-c-darker);
    }
  }
}

.tags {
  padding: 6px 0;
}

.content {
  margin-top: 12px;
  margin-bottom: 56px;
}
</style>
