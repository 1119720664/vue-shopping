<template>
  <div class="category">
    <header class="g-header-container">
      <category-header></category-header>
    </header>
    <div class="g-content-container">
      <div class="slider" v-if="items.length">
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
        currentId: '',
        items: []
      }
    },
    methods: {
      getCurrentId(id) {
        this.currentId = id
      }
    },
    components: {
      CategoryHeader,
      Tab,
      CategoryContent
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 50px;
    right: 0;
  }

  .slider {
    width: 80px;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .main {
    flex: 1;
    height: 100%;
  }
</style>
