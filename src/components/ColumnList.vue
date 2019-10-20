<template>
  <section class="column-list" data-ui-column-list>
    <div class="wrap" data-ui-scroll>
      <div class="sticky"><div class="fill"></div></div>
      <div class="list">
        <template v-if="articles === null">
          <article
            class="article blank"
            data-ui-blank
            @click="handleFocusedArticle()"
            v-for="n of 15"
            :key="n"
          >
            <h3 class="title">
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </h3>
            <h4 class="excerpt">
              &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </h4>
            <div class="meta">
              <span class="created">&#xa1;&#xa1;&nbsp;&nbsp;&#xa1;&#xa1;</span>
              &nbsp;&nbsp;
              <span class="comments">&#xa1;&#xa1;&nbsp;&#xa1;</span>
            </div>
            <nav class="tags">
              &#xa1;&#xa1;&#xa1;&#xa1;&nbsp;&nbsp;&#xa1;&#xa1;&nbsp;&nbsp;&#xa1;&#xa1;&#xa1;
            </nav>
          </article>
        </template>
        <article
          class="article"
          @click="handleFocusedArticle(article)"
          v-for="(article, i) of articleList"
          :key="i + article.id"
        >
          <h3 class="title">{{ article.title }}</h3>
          <h4 class="excerpt">{{ article.excerpt }}</h4>
          <div class="meta">
            <span class="created">{{ article.created }}</span>
            <span class="comments">{{ article.comments }}</span>
          </div>
          <Tags :tags="article.tags || []" :tiny="true" />
        </article>

        <footer>
          - {{ $t("f_found_article", { count: articleList.length }) }} -
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Tags from "./Tags.vue";

export default {
  name: "ColumnList",
  model: {
    prop: "show",
    event: "toggle"
  },
  props: {
    show: Boolean
  },
  computed: {
    ...mapState(["articles", "focusedArticles", "focusedTags"]),

    articleList() {
      return (this.articles || []).filter(({ id }) =>
        (this.focusedArticles || []).includes(id)
      );
    }
  },
  methods: {
    ...mapMutations(["updateArticle", "updateFocusedArticles"]),

    handleFocusedArticle(article) {
      this.updateArticle(article);

      if (this.show) {
        this.$emit("focusedArticle", article);
      }
    }
  },
  watch: {
    focusedTags() {
      this.updateFocusedArticles();
    }
  },
  components: {
    Tags
  }
};
</script>

<style lang="scss" scoped>
.column-list {
  > .wrap {
    background-image: linear-gradient(
      to bottom,
      var(--main-bg-c) 5%,
      var(--column-list-bg-c)
    );
    padding-bottom: 52px;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    display: flex;
    position: relative;
  }
}

.sticky {
  height: 0;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 2;

  .fill {
    opacity: 0.85;
    background-image: linear-gradient(
      to bottom,
      var(--main-bg-c) 60%,
      transparent
    );
    height: 64px;
  }
}

.list {
  width: 100%;
  padding: 0 16px;
  padding-top: calc(var(--float-nav-py) + 6px);

  > footer {
    width: 100%;
    color: var(--text-info-c-light);
    font-size: 12px;
    text-align: center;
    padding: 24px 0;
  }
}

.article {
  cursor: pointer;
  box-shadow: 0 1px 2px 1px var(--articles-item-sd-c);
  border-radius: 4px;
  background-color: var(--articles-item-bg-c);
  font-size: 12px;
  padding: 12px 16px;
  margin-bottom: 12px;
  position: relative;

  &.blank {
    cursor: default;
  }
}

h3,
h4 {
  margin: 0;
}

.title {
  font-size: 14px;
  white-space: nowrap;
}

.excerpt {
  font-weight: normal;
  font-size: 12px;
  white-space: nowrap;
  margin-top: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    background-image: linear-gradient(
      to left,
      var(--articles-item-bg-c) 2%,
      transparent
    );
    width: 2em;
    display: block;
    bottom: 0;
    right: 0;
    top: 0;
    position: absolute;
  }
}

.meta {
  font-size: 10px;
  margin-top: 4px;
}
</style>
