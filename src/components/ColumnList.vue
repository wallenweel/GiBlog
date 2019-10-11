<template>
  <section class="columnList">
    <div class="list">
      <article class="item" v-for="article of articles" :key="article.id">
        <h3 class="title">{{ article.title }}</h3>
        <h4 class="excerpt">{{ article.excerpt }}</h4>
        <div class="meta">
          <span class="created">{{ article.created }}</span>
          <span class="comments">{{ article.comments }}</span>
        </div>
        <nav class="tags">
          <a class="tag" v-for="tag of article.tags" :key="tag.id">
            {{ tag.name }}
          </a>
        </nav>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColumnList",
  computed: {
    articles() {
      return this.$store.state.articles;
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
  overflow-y: auto;
}
</style>
