<template>
  <nav :class="['float-nav-bar', 'small']">
    <div class="wrap">
      FloatNavBar
    </div>
  </nav>
</template>

<script>
export default {
  name: "FloatNavBar"
};
</script>

<style lang="scss" scoped>
.float-nav-bar {
  height: 0;
  width: 0;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 12;

  > .wrap {
    background-color: var(--float-nav-s-b-c);
    align-items: center;
    padding: 0 8px;
    display: flex;
    position: relative;
  }
}

.small {
  > .wrap {
    height: var(--float-nav-s-h);
    width: var(--float-nav-s-w);

    left: calc(var(--float-nav-s-w) * -1);
  }
}
</style>
