<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header></search-header>
      </header>
      <div class="g-content-container">
        <hot :hotSearch="hotSearch"></hot>
        <scroll :data="searchGroup">
          <history @scrollKeywords="searchHistory"></history>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SearchHeader from 'base/search-header/search-header'
  import Hot from 'base/hot/hot'
  import Scroll from 'base/scroll/scroll'
  import History from 'base/history/history'
  import { getSearchHotKeyword } from 'api/search'

  export default {
    name: 'Search',
    created() {
      this._getSearchHotKeyword()
    },
    data() {
      return {
        hotSearch: [],
        searchGroup: []
      }
    },
    methods: {
      _getSearchHotKeyword() {
        getSearchHotKeyword().then((res) => {
          this.hotSearch = res
        })
      },
      searchHistory(searchHistory) {
        this.searchGroup = searchHistory
      }
    },
    components: {
      SearchHeader,
      Hot,
      Scroll,
      History
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .search {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: $search-z-index;
    background: $bgc-theme;
    .g-content-container {
      margin-top: 50px
    }
  }

  .search-enter-active, .search-leave-active {
    transition: 0.3s;
  }

  .search-enter, .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
