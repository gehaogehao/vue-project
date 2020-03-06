<template>
  <div class="list">
      <ul>
          <li>
              <ele-icon :size='2' :type='1' class="icon"></ele-icon>
              <span>在线支付满28减5,满50减10</span>
          </li>
          <li>
              <ele-icon :size='2' :type='2' class="icon"></ele-icon>
              <span>单人精彩比赛</span>
          </li>
          <li>
              <ele-icon :size='2' :type='3' class="icon"></ele-icon>
              <span>清肺雪梨汤8折抢购</span>
          </li>
          <li>
              <ele-icon :size='2' :type='4' class="icon"></ele-icon>
              <span>特价饮品八折抢购</span>
          </li>
          <li>
              <ele-icon :size='2' :type='5' class="icon"></ele-icon>
              <span>单人特色套餐</span>
          </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from 'components/ele-icon/ele-icon.vue'
  export default {
      name:'ele-list',
      components:{
          'ele-icon':icon
      }
  }
</script>

<style scoped lang="stylus">
ul
  padding-left 12px 
  margin-top 24px
  li
    height 16px
    font-size 12px
    font-weight 200
    color rgb(255,255,255)
    line-height 12px
    margin-bottom 12px
    &:last-child
        margin-bottom 0
    .icon
        margin-right 6px  
        margin-top -2px 
</style>
