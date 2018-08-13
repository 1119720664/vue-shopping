<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <h1 class="mine-navbar-title" v-if="title">
      <span class="mine-navbar-text" v-text="title"></span>
    </h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'NavBar',
    props: {
      title: String,
      default: ''
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~common/scss/_mixins.scss";

  .mine-navbar {
    @include flex-between();
    height: 50px;
    background-color: #fff;
    &-left {
      margin-left: 10px
    }
    &-center {
      flex: 1;
      margin: 0 10px
    }
    &-right {
      margin-right: 10px;
     /* position: absolute;
      right: 0;*/
      @include flex-center();
      height: 100%
    }

    &-title {
      position: absolute;
      top: 0;
      left: 20%;
      right: 20%;
      bottom: 0;
      text-align: center;
      @include flex-center(); /*注:使用行高,则不灵活  ~  如果样式出现波浪线 表示前面的样式如果存在，则显示后面元素的样式，不存在，则为不生效*/
    }

    &-text { /*注:flex布局可能会和其他的布局方式产生冲突,例如文本超出显示省略号,则可以使用在包一层元素解决冲突问题*/
      font-size: 18px;
      width: 100%;
      line-height: 1.5;
      @include ellipsis()
    }
  }
</style>
