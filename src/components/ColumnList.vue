<template>
  <section class="columnList" data-ui-column-list>
    <div class="list">
      <article
        class="article"
        @click="updateArticle(article)"
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

      <footer>- Found {{ articleList.length }} Articles -</footer>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Tags from "./Tags.vue";

export default {
  name: "ColumnList",
  computed: {
    ...mapState(["articles", "focusedArticles", "focusedTags"]),

    articleList() {
      return (this.articles || []).filter(({ id }) =>
        (this.focusedArticles || []).includes(id)
      );
    }
  },
  methods: {
    ...mapMutations(["updateArticle", "updateFocusedArticles"])
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
.columnList {
  background-color: var(--column-list-bg-c);
  width: var(--column-list-w);
  height: var(--column-list-h);
  flex-shrink: 0;
  flex-direction: column;
  display: flex;

  top: 0;
  left: var(--column-left-w);
  position: fixed;
  z-index: 6;

  --hide-len: calc((var(--column-left-w) + var(--column-list-w)) * -1);
  --show-len: calc((var(--column-left-w) * 2 + var(--column-list-w)));
  left: var(--hide-len);

  transition: transform 0.25s ease;
  transform: translateX(var(--show-len));
}

.list {
  height: 100%;
  padding: 8px;
  overflow-y: auto;

  > footer {
    line-height: 56px;
    width: 100%;
    color: var(--text-info-c-light);
    font-size: 12px;
    text-align: center;
  }
}

.article {
  cursor: pointer;
  background-color: var(--articles-item-bg-c);
  font-size: 12px;
  padding: 8px;
  margin: 12px 0;
  position: relative;
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
  margin-top: 4px;
}

.meta {
  font-size: 10px;
  margin-top: 4px;
}
</style>
