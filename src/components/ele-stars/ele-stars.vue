<template>
  <div class="stars" :class="`stars-${size}`">
    <div class="star" v-for="(item, index) in starsList" :key="index" :class='item'></div>
  </div>
</template>

<script type="text/ecmascript-6">
const ON = 'on'
const HALF = 'half'
const OFF = 'off'
const LENGTH = 5
export default {
  name: "ele-stars",
  props:{
      size:Number,
      score:Number
  },
  computed: {
      starsList(){
          let arr = []
          const score = Math.floor(this.score * 2) / 2
          const needHalf = (score % 1) === 0 ? false : true
          const fullStar = Math.floor(score)
          for(let i = 0; i < fullStar; i++){
              if(arr.length === LENGTH) break
              arr.push(ON)
          }
          needHalf ? arr.push(HALF) : ""
          while(arr.length < LENGTH){
              arr.push(OFF)
          }
          return arr
      }
  }
} 
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
.stars
    display inline-flex
    .star
        background-size 100%
        background-repeat no-repeat
    &.stars-24
        .star
            width 10px
            height 10px
            margin-right 10px
            &:last-child
                margin-right 0 
            &.on
                bg-image(star24_on)
            &.half
                bg-image(star24_half) 
            &.off
                bg-image(star24_off)          
    &.stars-36
        .star
            width 15px
            height 15px
            margin-right 15px
            &:last-child
                margin-right 0 
            &.on
                bg-image(star36_on)
            &.half
                bg-image(star36_half) 
            &.off
                bg-image(star36_off) 
    &.stars-48
        .star
            width 20px
            height 20px 
            margin-right 20px
            &:last-child
                margin-right 0 
            &.on
                bg-image(star48_on)
            &.half
                bg-image(star48_half) 
            &.off
                bg-image(star48_off)                  
</style>
