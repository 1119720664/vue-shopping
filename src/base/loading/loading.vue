<template>
  <div class="mine-loading" :class="inlineIcon">
    <span class="mine-loading-indicator" v-if="indicator==='on'">
      <slot>
        <img src="../../common/image/loading.gif">
      </slot>
    </span>
    <span class="mine-loading-text" v-if="text">{{text}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Loading',
    props: {
      indicator: {
        type: String,
        default: 'on',
        validator(value) {
          return ['on', 'off'].indexOf(value) > -1
        }
      },
      text: {
        indicator: String,
        default: '加载中...'
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      inlineIcon() {
        return this.inline ? 'mine-loading-inline' : null
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .mine-loading {
    overflow: hidden;
    width: 100%;
    height: 100%;
    @include flex-center(column);

    &.mine-loading-inline {
      flex-direction: row;
    }
    .mine-loading-indicator {
      img {
        width: 100px;
        height: 100px
      }
    }
  }

  .mine-loading-indicator ~ .mine-loading-text {

  }
</style>
