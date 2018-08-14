<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container" v-if="!hotSearch.length">
      <loading inline></loading>
    </div>
    <ul v-if="hotSearch.length" class="hot-list">
      <li class="hot-item" v-for="(hot,index) in hotSearch" :key="index" @click="$_selectItem(hot.hotWord)">
        {{hot.hotWord}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import { searchMixin } from 'common/js/mixins'

  export default {
    name: 'Hot',
    props: {
      hotSearch: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mixins: [searchMixin],
    components: {
      Loading
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #f0f2f5;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
