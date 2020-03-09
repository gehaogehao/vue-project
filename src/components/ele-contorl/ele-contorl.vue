<template>
  <div class="contorl">
      <transition name="contorlRemove">
          <i class="icon-remove_circle_outline remove" @click="removeCount"
        v-show="food.count > 0"></i>
      </transition>
      <transition name="contorlRemove">
          <span v-show="food.count > 0">{{food.count}}</span>
      </transition>
      <i class="icon-add_circle" @click="addCount"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'contorl',
      props:{
          food:Object
      },
     methods: {
        addCount(){
            this.bus.$emit("addCount",this.food)
        },
        removeCount(){
            this.bus.$emit("removeCount",this.food)
        }
     },
  }
</script>

<style scoped lang='stylus'>
.contorl
    position absolute
    right 0
    bottom 3px
    i 
        display inline-block
        font-size 24px
        color rgb(0,160,220)
        vertical-align middle
        &.remove
            opacity 1
            transform translate3d(0,0,0) rotate(-720deg)
    span 
        display inline-block
        width 24px 
        text-align center
        font-size 10px
        color rgb(147,153,159) 
        vertical-align middle  
</style>
