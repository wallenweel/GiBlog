<template>
  <nav class="content-flip-bar" data-ui-content-flip>
    <div class="wrap">
      <div class="left">
        <Button type="clear">
          <Icon><IconArrowLeft /></Icon>
        </Button>
        <Button type="clear">
          <Icon><IconArrowRight /></Icon>
        </Button>
      </div>
      <div class="middle"></div>
      <div class="right">
        <Button type="clear">
          <Icon><IconArrowLeft /></Icon>
        </Button>
        <Button type="clear">
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
  name: "ContentFlipBar",
  components: {
    Button,
    Icon,
    IconArrowLeft,
    IconArrowRight
  }
};
</script>

<style lang="scss" scoped>
.content-flip-bar {
  > .wrap {
    position: relative;
  }
}

.left,
.right {
  box-shadow: 0px 0px 4px 2px var(--float-nav-sd-c);
  box-sizing: content-box;
  background-color: var(--content-flip-btn-b-c);
  margin-top: calc(var(--content-flip-btn-h) * -1);
  padding: 8px 0;
  overflow: hidden;

  > button {
    box-sizing: border-box;
    height: var(--content-flip-btn-h);
    width: 26px;
    color: var(--content-flip-btn-c);
    display: flex;
    justify-content: center;
  }
}

.left {
  border-radius: 0 6px 6px 0;
}

.right {
  border-radius: 6px 0 0 6px;
}
</style>
