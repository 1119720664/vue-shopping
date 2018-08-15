<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header @query="getQuery"></search-header>
      </header>
      <div class="g-content-container">
        <div class="search_history">
          <scroll :data="searchGroup" :scrollbar="false">
            <hot :hotSearch="hotSearch" v-show="!query"></hot>
            <history @scrollKeywords="searchHistory" @showConfirm="showConfirm" ref="history" v-show="!query"></history>
            <search-result :query="query" v-show="query"></search-result>
          </scroll>
        </div>
      </div>
      <confirm msg="确定要清空么?" ref="confirm" @confirm="clearAllSearchHistory"></confirm>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SearchHeader from 'base/search-header/search-header'
  import SearchResult from 'base/search-result/search-result'
  import Hot from 'base/hot/hot'
  import Scroll from 'base/scroll/scroll'
  import History from 'base/history/history'
  import Confirm from 'base/confirm/confirm'
  import { getSearchHotKeyword } from 'api/search'

  export default {
    name: 'Search',
    created() {
      this._getSearchHotKeyword()
    },
    data() {
      return {
        hotSearch: [],
        searchGroup: [],
        query: ''
      }
    },
    methods: {
      _getSearchHotKeyword() {
        getSearchHotKeyword().then((res) => {
          this.hotSearch = res
        })
      },
      getQuery(query) {
        this.query = query
      },
      searchHistory(searchHistory) {
        this.searchGroup = searchHistory
      },
      showConfirm() {
        this.$refs.confirm.show()
      },
      clearAllSearchHistory() {
        this.$refs.history.clear()
      }
    },
    components: {
      SearchHeader,
      Hot,
      Scroll,
      History,
      Confirm,
      SearchResult
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
      margin-top: 50px;
      .search_history {
        position: fixed;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0
      }
    }
  }

  .search-enter-active, .search-leave-active {
    transition: 0.3s;
  }

  .search-enter, .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
