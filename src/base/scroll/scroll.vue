<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Scroll',
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true, /*设置dom的高度*/  //eslint-disable-line
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }
</style>
