<template>
  <div class="car">
      <div class="left">
          <div class="icon">
              <div class="logo">
                  <i class="icon-shopping_cart"></i></i>
              </div>
          </div>
          <div class="totalPrice">
              <span>￥{{totalPrice}}</span>
          </div>
          <div class="deliveryPrice">
              <span>另需配送费¥{{sellersData.deliveryPrice}}元</span>
          </div>
      </div>
      <div class="right">
          <span v-if="rightText">{{rightText}}</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'ele-car',
      props:{
          sellersData:Object,
          foods:Array
      },
      computed: {
          totalPrice(){
              let totalPrice = 0
              this.foods.forEach((food)=>{
                  totalPrice += food.price * food.count
              })
              return totalPrice
          },
          rightText(){
              if(this.totalPrice === 0){
                  return `￥${this.sellersData.minPrice}起送`
              } 
              else if(this.totalPrice < this.sellersData.minPrice){
                  return `还差¥${this.sellersData.minPrice - this.totalPrice}起送`
              }else{
                  return `去结算`
              }
          }
      },
  }
  
</script>

<style scoped lang='stylus'>
.car
    position fixed
    left 0
    bottom 0
    display flex
    width 100%
    height 46px
    background-color #141d27
    .left
        flex 1
        display flex
    .right
        flex 0 0 105px
        display flex
        justify-content center
        align-items center
        height 100%
        background-color rgba(255,255,255,.2)
</style>
