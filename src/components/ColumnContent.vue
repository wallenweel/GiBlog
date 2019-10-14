<template>
  <section class="column-content" data-ui-column-content>
    <div class="wrap">
      <article class="article">
        <header>
          <h1 class="title" v-if="article.title">{{ article.title }}</h1>
          <h1 class="title blank" data-ui-blank v-else>
            &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
          </h1>

          <div class="meta">
            <div class="created" v-if="article.created !== null">
              {{ $t("created") }}:
              <span>
                {{ $d(new Date(article.created || null), "short") }}
              </span>
            </div>
            <div class="blank" data-ui-blank v-else>
              &#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </div>
            <div class="updated" v-if="article.updated !== null">
              {{ $t("updated") }}:
              <span>
                {{ $d(new Date(article.updated || null), "long") }}
              </span>
            </div>
            <div class="blank" data-ui-blank v-else>
              &#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </div>
            <div class="comments" v-if="article.comments !== null">
              {{ $t("comment") }}: <span>{{ article.comments || 0 }}</span>
            </div>
            <div class="blank" data-ui-blank v-else>
              &#xa1;&#xa1;&nbsp;&#xa1;&#xa1;
            </div>
          </div>
          <Tags :tags="article.tags" :tiny="true" v-if="article.tags" />
          <nav class="tags blank" data-ui-blank v-else>
            &#xa1;&#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&#xa1;
          </nav>
        </header>
        <div
          class="content markdown-body"
          v-html="content"
          v-if="content"
        ></div>
        <div class="content blank" data-ui-blank v-else>
          <p><b v-for="n of 50" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 120" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 20" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 110" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 70" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 200" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 30" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 80" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 40" :key="n">&#xa1;</b></p>
          <p><b v-for="n of 20" :key="n">&#xa1;</b></p>
        </div>
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
    border-radius: 4px;
    background-color: var(--article-header-bg-c);
    padding: 8px;
    padding-bottom: 12px;
    margin-bottom: 28px;
  }

  .blank {
    p {
      flex-wrap: wrap;
      display: flex;
      font-size: 16px;
      line-height: 1.35;
    }
  }
}

.title {
  font-size: 18px;
  margin: 8px 0;
  &.blank {
    font-size: 24px;
  }
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
  padding-top: 6px;
}

.content {
  margin: auto;
  margin-top: 12px;
  margin-bottom: 56px;
  max-width: 90%;
}
</style>
