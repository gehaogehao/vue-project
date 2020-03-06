<template>
  <div id="app">
    <ele-header></ele-header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "components/ele-header/ele-header.vue";
export default {
  name: "App",
  components: {
    "ele-header": Header
  }
};
</script>

<style scoped lang='stylus'>
@import './common/stylus/mixin.styl';
#app
  .navs
    one-px(rgba(7,17,27,.1))
    display flex
    height 40px
    line-height 40px
    .item
      flex 1
      text-align center
      a
        width 100%
        height 100%
        display block
        font-size 14px
        color rgb(77,85,93)
        &.active
             color rgb(240,20,20)
</style>
