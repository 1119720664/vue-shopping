<template>
  <div class="product">
    product
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Product'
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~common/scss/mixins";
  @import "~common/scss/_variables.scss";

  .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background: #fff
  }
</style>
