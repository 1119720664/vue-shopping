<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="isLoading">
      <div class="loading-wrapper">
        <loading></loading>
      </div>
    </div>
    <scroll ref="scroll">
      <div class="content" >
        <div class="pic" v-if="content.banner">
          <a :href="content.banner.linkUrl" class="pic-link">
            <img :src="content.banner.picUrl" alt="" class="pic-img"/>
          </a>
        </div>
        <div class="section" v-for="(section,index) in content.data" :key="index">
          <h4 class="section-title"></h4>
          <ul class="section-list">
            <li class="section-item" v-for="(item,i) in section.itemList" :key="i">
              <a :href="item.linkUrl" class="section-link">
                <p class="section-pic" v-if="item.picUrl">
                  <img v-lazy="item.picUrl" class="section-img" alt="">
                </p>
                <p class="section-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import BackTop from 'base/back-top/back-top'
  import { getCategoryContent } from 'api/category'

  export default {
    name: 'Content',
    props: {
      currentId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        content: [],
        isBacktopVisible: false,
        isLoading: true
      }
    },
    methods: {
      backTop() {
        this.$refs.scroll.scrollToTop(300)
      },
      getContent(id) {
        getCategoryContent(id).then(res => {
          if (!res) {
            return
          }
          this.content = res.content
          this.isLoading = true
        })
      }
    },
    components: {
      Loading,
      Scroll,
      BackTop
    },
    watch: {
      currentId(currentId) {
        this.getContent(currentId)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .content-wrapper {
    position: relative;
    height: 100%;
  }

  .loading-container {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: $category-popup-z-index;
    @include flex-center();
    width: 100%;
    height: 100%;
    /*background-color: $modal-bgc;*/

    .mine-loading {
      color: #fff;
      font-size: 14px;
    }
  }

  .loading-wrapper {
    width: 50%;
    padding: 30px 0;
    background-color: $modal-bgc;
    border-radius: 4px;
  }

  .content {
    padding: 10px;
  }

  .pic {
    margin-bottom: 12px;

    &-link {
      display: block;
    }

    &-img {
      width: 100%;
    }
  }

  .section {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      height: 28px;
      line-height: 28px;
      color: #080808;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      padding: 10px 10px 0;
    }

    &-item {
      width: (100% / 3);
    }

    &-link {
      display: block;
    }

    &-pic {
      position: relative;
      width: 80%;
      padding-bottom: 80%;
      margin: 0 auto;
    }

    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-name {
      height: 36px;
      line-height: 36px;
      text-align: center;
      @include ellipsis();
    }
  }

  .g-backtop-container {
    bottom: 10px;
  }
</style>
