<template>
  <div class="tabScroll" ref="Tab">
    <scroll :scrollbar="false" :data="items" ref="scroll">
      <ul class="tab">
        <li class="tab-item" :class="{'tab-item-active':item.id === currentID}" v-for="(item,index) in items"
            :key="index"
            @click="switchTab(item.id)">{{item.name}}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'Tab',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      this.switchTab(this.items[0].id)
    },
    data() {
      return {
        currentID: ''
      }
    },
    methods: {
      switchTab(id) {
        if (this.currentID === id) {
          return
        }
        this.currentID = id
        this.$emit('switch-tab', id)
      },
      handleScrolllist(items) {
        const bottom = items.length > 0 ? '50px' : ''
        this.$refs.Tab.style.bottom = bottom
        this.$refs.scroll.fresh()
      }
    },
    mounted() {
      setTimeout(() => {
        this.handleScrolllist(this.items)
      }, 20)
    },
    components: {
      Scroll
    },
    watch: {
      items(newVal) {
        this.handleScrolllist(newVal)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";
  @import "~common/scss/_variables.scss";

  $tab-item-height: 46px;

  .tabScroll {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height:100%
  }

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      background-color: #fff;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      color: #080808;
      font-size: $font-size-l;
      font-weight: bold;
      text-align: center;
      line-height: $tab-item-height;
      @include ellipsis();

      &:last-child {
        border-bottom: none;
      }
    }

    &-item-active {
      background: none;
      border-right: none;
      color: #f23030;
    }
  }

</style>
