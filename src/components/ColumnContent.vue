<template>
  <section class="column-content" data-ui-column-content>
    <div class="wrap">
      <article class="article">
        <header>
          <h1 class="title">{{ article.title }}</h1>
          <div class="meta">
            <div class="created">
              {{ $t("created") }}:
              <span>
                {{ $d(new Date(article.created || null), "short") }}
              </span>
            </div>
            <div class="updated">
              {{ $t("updated") }}:
              <span>
                {{ $d(new Date(article.updated || null), "long") }}
              </span>
            </div>
            <div class="comments">
              {{ $t("comments") }}: <span>{{ article.comments || 0 }}</span>
            </div>
          </div>
          <Tags :tags="article.tags" :tiny="true" />
        </header>
        <div class="content markdown-body" v-html="content"></div>
      </article>
    </div>
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
.column-content {
  > .wrap {
    background-color: var(--column-content-bg-c);
  }
}

.article {
  width: inherit;
  padding: 16px;

  > header {
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
