<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <loading :text="pullDownText" inline ref="pullDownLoading"></loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Loading from 'base/loading/loading'

  export default {
    name: 'Scroll',
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return []
        }
      },
      pullDown: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.PULL_DOWN_HEIGHT = 100
      this.PULL_DOWN_TEXT_INIT = '在拉,在拉就刷给你看'
      this.PULL_DOWN_TEXT_START = '够了啦,松开人家嘛'
      this.PULL_DOWN_TEXT_ING = '刷呀刷呀,好累啊'
      this.PULL_DOWN_TEXT_END = '刷新完了哦'
    },
    data() {
      return {
        pullDownText: '在拉,在拉就刷给你看',
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true, /*设置dom的高度*/  //eslint-disable-line
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd
          }
        }
      }
    },
    methods: {
      fresh() {
        this.$refs.swiper && this.$refs.swiper.update()
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper
        if (swiper.translate > 0) {   /*下拉*/   //eslint-disable-line
          if (!this.pullDown) {
            return
          }
          if (swiper.translate > this.PULL_DOWN_HEIGHT) {
            this.$refs.pullDownLoading.setText('够了啦,松开人家嘛')
            /*解决文本替换后闪屏的问题,不能放在this下，会有闪屏问题*/   //eslint-disable-line
          } else {
            this.$refs.pullDownLoading.setText('在拉,在拉就刷给你看')
          }
        }
      },
      touchEnd() {
        const swiper = this.$refs.swiper.swiper
        if (swiper.translate > this.PULL_DOWN_HEIGHT) {
          if (!this.pullDown) {
            return
          }
          //swiper.allowTouchMove = false
          /*不可以触摸或者回弹等其他动作*/ //eslint-disable-line
          //swiper.setTransition(swiper.params.speed)
          //swiper.setTranslate(this.PULL_DOWN_HEIGHT)
          this.$refs.pullDownLoading.setText(this.PULL_DOWN_TEXT_ING)
          this.$emit('pull-down', this.pullDownEnd)
        }
      },
      pullDownEnd() {
        /*可以触摸或者回弹等其他动作*/ //eslint-disable-line
        console.log(15965)
        this.$refs.pullDownLoading.setText(this.PULL_DOWN_TEXT_END)
      }
    },
    components: {
      swiper,
      swiperSlide,
      Loading
    },
    watch: {
      data() {
        this.fresh()
      }
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

  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    height: 80px
  }
</style>
