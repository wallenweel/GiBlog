<template>
  <section class="columnList">
    <div class="list">
      <article class="item" v-for="(a, n) of articles" :key="n + a.id">
        <h3 class="title">{{ a.title }}</h3>
        <h4 class="excerpt">{{ a.excerpt }}</h4>
        <div class="meta">
          <span class="create_date">{{ a.meta.create_date }}</span>
          <span class="comments">{{ a.meta.comments }}</span>
        </div>
        <nav class="labels">
          <a class="label" v-for="(l, n) of a.labels" :key="l + n">{{ l }}</a>
        </nav>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ColumnList",
  data() {
    return {
      article: {
        id: "",
        title: "This is Item's Title",
        excerpt: "This is item's preview ...",
        meta: {
          create_date: "2019-07-15",
          comments: 0
        },
        labels: ["Label 1", "Label 2"]
      }
    };
  },
  computed: {
    articles() {
      return [
        this.article,
        this.article,
        this.article,
        this.article,
        this.article,
        this.article,
        this.article,
        this.article
      ];
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
