<template>
  <section class="column-content" data-ui-column-content>
    <div class="wrap" data-ui-scroll ref="scroll">
      <div class="sticky"><div class="fill"></div></div>
      <article class="article" ref="article">
        <header>
          <h1 class="title" v-if="article.title">{{ article.title }}</h1>
          <h1 class="title blank" data-ui-blank v-else>
            &#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
          </h1>

          <div class="meta">
            <div class="created" v-if="article.created !== undefined">
              {{ $t("created") }}:
              <span>
                {{ $d(new Date(article.created || null), "short") }}
              </span>
            </div>
            <div class="blank" data-ui-blank v-else>
              &#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </div>
            <div class="updated" v-if="article.updated !== undefined">
              {{ $t("updated") }}:
              <span>
                {{ $d(new Date(article.updated || null), "long") }}
              </span>
            </div>
            <div class="blank" data-ui-blank v-else>
              &#xa1;&#xa1;&nbsp;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;&#xa1;
            </div>
            <div class="comments" v-if="article.comments !== undefined">
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

      <CommentEditor />
      <CommentList />
    </div>
  </section>
</template>

<script>
import Tags from "./Tags.vue";
import CommentEditor from "@/components/CommentEditor.vue";
import CommentList from "@/components/CommentList.vue";

export default {
  name: "ColumnContent",
  data() {
    return {
      content: "",
      articleElement: null,
      scrollElement: null,
      scrollTop: null,
      scrollTimeoutId: null
    };
  },
  computed: {
    article() {
      const state = this.$store.state;
      return state.article || (state.articles || [])[0] || {};
    }
  },
  methods: {
    handleScroll(ev) {
      if (this.scrollTimeoutId !== null) clearTimeout(this.scrollTimeoutId);

      this.scrollTimeoutId = setTimeout(() => {
        const top = parseInt(ev.target.scrollTop, 10);
        const direction = top - this.scrollTop > 0 ? "down" : "up";
        const exceeded =
          top > this.articleElement.scrollHeight - window.innerHeight * 0.5;

        // TODO: improve this
        if (exceeded) this.fetchComments();

        this.$emit("scroll", { top, direction, exceeded });
        this.scrollTop = top;

        clearTimeout(this.scrollTimeoutId);
        this.scrollTimeoutId = null;
      }, 300);
    },

    fetchComments() {
      this.$store.dispatch("getComments", this.article.number);
    },

    async renderMarkdown() {
      if (!this.article.content) return;

      const [, html] = await this.$store.dispatch(
        "getMarkdownHTML",
        this.article.content
      );

      this.content = html;
    }
  },
  mounted() {
    this.articleElement = this.$refs.article;
    this.scrollElement = this.$refs.scroll;
    this.scrollTop = parseInt(this.scrollElement.scrollTop, 10);
    this.scrollElement.addEventListener("scroll", this.handleScroll, false);
  },
  destroyed() {
    this.scrollElement.removeEventListener("scroll", this.handleScroll, false);
  },
  watch: {
    article() {
      this.renderMarkdown();
    }
  },
  components: {
    Tags,
    CommentEditor,
    CommentList
  }
};
</script>

<style lang="scss" scoped>
.column-content {
  > .wrap {
    background-color: var(--column-content-bg-c);
  }
}

.sticky {
  height: 0;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 1;

  .fill {
    background-image: linear-gradient(
      to bottom,
      var(--column-content-bg-c) 10%,
      transparent
    );
    height: 64px;
  }
}

.article {
  width: inherit;
  padding: 32px 16px;

  > header {
    border-radius: 4px;
    background-color: var(--article-header-bg-c);
    padding: 16px;
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
  margin-top: 24px;
  margin-bottom: 56px;
  max-width: 90%;
}
</style>
