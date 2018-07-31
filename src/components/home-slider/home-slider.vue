<template>
  <div class="slider-wrapper">
    <Loading v-if="!sliders.length"></Loading>
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
  import Loading from 'base/loading/loading'

  export default {
    name: 'HomeSlider',
    props: {
      sliders: {
        type: Array,
        default() {
          return {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            setWrapperSize: true,
            scrollbar: {
              el: this.scrollbar ? '.swiper-scrollbar' : null,
              hide: true
            }
          }
        }
      }
    },
    data() {
      return {}
    },
    components: {
      swiperSlide,
      Slider,
      Loading
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
