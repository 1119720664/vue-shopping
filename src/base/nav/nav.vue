<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'HomeNav',
    data() {
      return {
        navs: [
          {
            linkUrl: 'https//www.imooc.com',
            picUrl: require('common/image/nav-item-1.png'),
            text: '团购'
          },
          {
            linkUrl: 'https//www.imooc.com',
            picUrl: require('common/image/nav-item-2.png'),
            text: '一元购'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-3.png'),
            text: '教育'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-4.png'),
            text: '旅行'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-5.png'),
            text: '团购'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-6.png'),
            text: '一元购'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-7.png'),
            text: '教育'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-8.png'),
            text: '旅行'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-9.png'),
            text: '教育'
          },
          {
            linkUrl: 'https://www.imooc.com',
            picUrl: require('common/image/nav-item-10.png'),
            text: '旅行'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .nav {
    width: 100%;
    padding-top: 15px;
    background-color: #fff;
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      width: 20%;
      margin-bottom: 15px;
    }
    &-link {
      @include flex-center(column)
    }
    &-pic {
      width: 60%;
      margin-bottom: 8px;
    }
  }
</style>
