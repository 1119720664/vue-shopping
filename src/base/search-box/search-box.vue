<template>
  <div class="mine-search-box-wrapper">
    <i class="iconfont icon-search"></i>
    <div class="mine-search-box" v-if="fake">{{placeholder}}</div>
    <input class="mine-search-box" :placeholder="placeholder" v-model="query" type="text" ref="input" title="搜索框"
           v-if="!fake"/>
    <i class="iconfont icon-close" @click="reset" v-show="query"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from 'common/js/debounce'

  export default {
    name: 'SearchBox',
    props: {
      fake: {
          type: Boolean,
          default: false
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      focus() {
        this.$refs.input && this.$refs.input.focus()
      },
      clear() {
        this.query = ''
      },
      reset() {
        this.clear()
        this.focus()
      }
    },
    watch: {
      query: debounce(function () {
        this.$emit('query', this.query)
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  $search-box-height: 30px;
  .mine-search-box-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: $search-box-height;
    padding: 0 7px;
    background-color: #fff;
    border-radius: $search-box-height / 2;
  }

  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size-sm;
    font-weight: bold;
  }

  .mine-search-box {
    flex: 1;
    background: none;
    border: none;
    margin: 0 6px;
    color: #666;
    line-height: 1.5;
  }
</style>
