<template>
  <swiper :options="swiperOption" :keyId="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper } from 'vue-awesome-swiper'
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1
        }
      },
      interval: {
        type: Number,
        default: 3000
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      sliders: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1,
          loop: this.sliders.length === 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        },
        keyId: Math.random()
      }
    },
    components: {
      swiper
    },
    watch: {
      sliders(newData) {
        if (!newData) {
          return
        }
        this.loop = this.sliders.length === 1 ? false : this.loop   /*没次刷新都要修改loop的值*/ //eslint-disable-line
        console.log(this.loop)
        this.keyId = Math.random()
        console.log(this.keyId)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%
  }
</style>
