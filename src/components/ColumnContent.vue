<template>
  <section class="columnContent">
    <div class="placeholder"></div>
    <article class="article">
      <header>
        <h1 class="title">{{ article.title }}</h1>
        <nav class="meta">
          <a class="created">
            Created: <span>{{ article.created }}</span>
          </a>
          <a class="updated">
            Updated: <span>{{ article.updated }}</span>
          </a>
          <a class="comments">
            Comments: <span>{{ article.comments }}</span>
          </a>
        </nav>
        <Tags :tags="article.tags || []" />
      </header>
      <div class="content markdown-body" v-html="content"></div>
    </article>
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
  width: calc(var(--column-list-w) + var(--column-left-w));
}

.article {
  width: inherit;
  padding: 16px;
}

.content {
  margin-top: 12px;
  margin-bottom: 56px;
}
</style>
