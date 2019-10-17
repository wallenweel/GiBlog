<template>
  <nav class="float-flip-bar" data-ui-float-flip>
    <div class="wrap">
      <div class="left">
        <Button :data-on="prev" type="clear" @active="handlePrev">
          <Icon><IconArrowLeft /></Icon>
        </Button>
        <Button :data-on="next" type="clear" @active="handleNext">
          <Icon><IconArrowRight /></Icon>
        </Button>
      </div>
      <div class="middle"></div>
      <div class="right">
        <Button :data-on="prev" type="clear" @active="handlePrev">
          <Icon><IconArrowLeft /></Icon>
        </Button>
        <Button :data-on="next" type="clear" @active="handleNext">
          <Icon><IconArrowRight /></Icon>
        </Button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import IconArrowLeft from "./icons/ArrowLeft.vue";
import IconArrowRight from "./icons/ArrowRight.vue";

export default {
  name: "FloatFlipBar",
  data() {
    return {
      prev: null,
      next: null
    };
  },
  methods: {
    flip(direction) {
      if (this.$store.state.article === null) return;

      this.$store.dispatch("switchArticle", direction);
    },
    handlePrev(ev, pressed) {
      this.prev = !!pressed;
      this.flip("prev");
    },
    handleNext(ev, pressed) {
      this.next = !!pressed;
      this.flip("next");
    }
  },
  components: {
    Button,
    Icon,
    IconArrowLeft,
    IconArrowRight
  }
};
</script>

<style lang="scss" scoped>
.float-flip-bar {
  > .wrap {
    position: relative;
  }
}

.left,
.right {
  box-shadow: 0px 0px 4px 2px var(--float-nav-sd-c);
  box-sizing: content-box;
  margin-top: calc(var(--float-flip-btn-h) * -1);
  overflow: hidden;

  > button {
    box-sizing: border-box;
    background-color: var(--float-flip-btn-b-c);
    height: var(--float-flip-btn-h);
    width: 26px;
    color: var(--float-flip-btn-c);
    align-items: center;
    justify-content: center;
    display: flex;

    &[data-on] {
      filter: brightness(0.92);

      > svg {
        transform: scale(1.25);
      }
    }
  }
}

.left {
  border-radius: 0 6px 6px 0;
}

.right {
  border-radius: 6px 0 0 6px;
}
</style>
