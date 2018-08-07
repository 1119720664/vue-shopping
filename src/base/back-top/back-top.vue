<template>
  <transition name="mine-backtop">
    <a href="javascript:void(0)" class="mine-backtop" v-show="visible" @click="backTop">
      <i class="iconfont icon-backtop"></i>
    </a>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'BackTop',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backTop() {
        this.$emit('backTop')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .mine-backtop {
    overflow: hidden;
    @include flex-center();
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    .iconfont {
      color: #fff;
      font-size: 38px;
    }
  }

  .mine-backtop {
    &-enter-active, &-leave-active {
      transition: 0.5s;
    }
    &-enter, &-leave-to {
      opacity: 0
    }
  }
</style>
