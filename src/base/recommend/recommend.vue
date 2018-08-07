<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <div class="loading-container" v-if="!recommends.length">
      <loading inline></loading>
    </div>
    <ul class="recommend-list" v-if="recommends.length">
      <li class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <router-link class="recommend-link" :to="{name:'HomeProduct',params:{id:item.baseinfo.itemId}}" tag="div">
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice">
            <del>¥{{item.price.origPrice}}</del>
          </p>
          <p class="recommend-info">
            <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'

  export default {
    name: 'Recommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Loading
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_variables.scss";
  @import "~common/scss/mixins";

  .recommend {
    &-title {
      position: relative;
      width: 100%;
      padding: 10px 0;
      font-size: $font-size-l;
      text-align: center;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: 40%;
        height: 1px;
        background: #ddd;
      }
      &:before {
        left: 0
      }
      &:after {
        right: 0
      }
    }
    &-list {
      @include flex-between();
      flex-wrap: wrap;
    }

    &-item {
      width: 49%;
      background: #fff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      margin-bottom: 8px
    }
    &-link {
      display: block;
    }
    &-pic {
      width: 100%;
      padding-top: 100%;
      height: 0;
      position: relative;
    }
    &-img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin-bottom: 5px;
    }
    &-name {
      height: 36px;
      padding: 0 5px;
      margin-bottom: 8px;
      line-height: 1.5;
      @include multiline-ellipsis()
    }
    &-origPrice {
      padding: 0 5px;
      margin-bottom: 8px;
      color: #ccc;
    }

    &-info {
      @include flex-between();
      padding: 0 5px;
      margin-bottom: 8px;
    }

    &-price {
      color: #e61414;
    }
    &-price-num {
      font-size: 20px
    }
    &-count {
      color: #999
    }
    .loading-container {
      padding-top: 150px
    }
  }
</style>
