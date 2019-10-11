<template>
  <section class="columnList">
    <div class="list">
      <article
        class="article"
        v-for="(article, i) of articles"
        :key="i + article.id"
      >
        <h3 class="title">{{ article.title }}</h3>
        <h4 class="excerpt">{{ article.excerpt }}</h4>
        <div class="meta">
          <span class="created">{{ article.created }}</span>
          <span class="comments">{{ article.comments }}</span>
        </div>
        <nav class="tags">
          <a class="tag" v-if="!(article.tags || []).length">
            <span>no tag</span>
          </a>
          <a
            class="tag"
            v-for="tag of article.tags"
            :style="{ color: `#${tag.color}` }"
            :key="tag.id"
          >
            <span>{{ tag.name }}</span>
          </a>
        </nav>
      </article>

      <footer>- Found {{ articles.length }} Articles -</footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColumnList",
  computed: {
    articles() {
      return this.$store.state.articles || [];
    }
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

.tags {
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.75;
}

.tag {
  border-radius: 2px;
  background-color: currentColor;
  font-size: 10px;
  white-space: nowrap;
  padding: 2px 4px;
  margin-right: 2px;

  > span {
    color: white;
  }
}
</style>
