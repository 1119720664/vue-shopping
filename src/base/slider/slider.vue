<template>
  <swiper>
    <swiper-slider :options="swiperOption">
      <slot></slot>
      <div class="swiper-pagination" v-if="pageination" slot="pageination"></div>
    </swiper-slider>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlider } from 'vue-awesome-swiper'
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal', 'vertical'].indexOf(value) > -1
        }
      }
    },
    components: {
      swiper,
      swiperSlider
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
