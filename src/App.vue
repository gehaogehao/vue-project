<template>
  <div id="app">
    <ele-header :sellersData="sellersData"></ele-header>
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
    <router-view :sellersData='sellersData'></router-view>
  </div>
</template>

<script>
import Header from "components/ele-header/ele-header.vue";
const OK = 0;
export default {
  name: "App",
  data() {
    return {
      sellersData:{}
    }
  },
  components: {
    "ele-header": Header
  },
  async mounted() {
    let result = await this.axios.get("/api/sellers")
    if(result.errorno === OK) this.sellersData = result.data
  },
};
</script>

<style scoped lang='stylus'>
@import './common/stylus/mixin.styl';
#app
  position relative
  width 100%
  height 100% 
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
