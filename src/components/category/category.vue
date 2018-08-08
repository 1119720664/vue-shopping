<template>
  <div class="category">
    <header class="g-header-container">
      <category-header></category-header>
    </header>
    <div class="g-content-container">
      <div class="slider">
        <tab :items="items" @switch-tab="getCurrentId"></tab>
      </div>
      <div class="main">
         <category-content :currentId="currentId"></category-content>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CategoryHeader from 'base/category/category-header'
  import CategoryContent from 'base/content/content'
  import Tab from 'base/tab/tab'
  import { categoryNames } from 'common/js/config'

  export default {
    name: 'Category',
    created() {
      this.items = categoryNames
    },
    data() {
      return {
        currentId: ''
      }
    },
    methods: {
      getCurrentId(id) {
        this.currentId = id
      },
      backTop() {
        this.$refs.scroll.scrollToTop(300)
      }
    },
    components: {
      CategoryHeader,
      Tab,
      CategoryContent
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~common/scss/_mixins.scss";
  @import "~common/scss/_variables.scss";

  .category {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .g-content-container {
    display: flex;
    margin-top: 50px
  }

  .slider {
    width: 80px;
    height: 100%;
  }

  .main {
    flex: 1;
    height: 100%
  }
</style>
