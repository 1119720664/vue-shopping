<template>
  <div class="slider-wrapper">
    <slider v-if="sliders.length">
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img"/>
        </a>
      </swiper-slide>
    </slider>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import { swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'HomeSlider',
    props: {
      sliders: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    components: {
      swiperSlide,
      Slider
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .slider-wrapper {
    height: 183px
  }

  .slider-link {
    display: block;
  }

  .swiper-container .slider-link,
  .swiper-container .slider-img {
    width: 100%;
    height: 100%
  }
</style>
