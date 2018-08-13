<template>
  <nav-bar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack()"></i>
    <search-box placeholder="开学季有礼,好货五折起" slot="center" @query="query"></search-box>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'base/nav-bar/nav-bar'
  import SearchBox from 'base/search-box/search-box'
  export default {
    name: 'SearchHeader',
    methods: {
      query(query) {
        this.$emit('query', query)
      },
      goBack() {
          this.$router.back()
      }
    },
    components: {
      NavBar,
      SearchBox
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";
  .header {
    border-bottom: 1px solid $border-color;

    .iconfont{
      color: $icon-color;
      font-size: $icon-font-size;
    }

    .mine-search-box-wrapper {
      background-color: #f7f7f7;
    }
  }
</style>
