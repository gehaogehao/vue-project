<template>
  <div class="header">
    <div class="header-top">
      <div class="avater">
        <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
      </div>
      <div class="info">
        <div class="title">
          <i class="brand"></i>
          <span class="name">嘉禾一品（温都水城）</span>
        </div>
        <div class="msg">
          <span class="msg-info">蜂鸟专送/36分钟送达</span>
        </div>
        <div class="support">
          <ele-icon :size='1' :type='1'></ele-icon>
          <span class="text">在线支付满28减5,满50减10</span>
        </div>
        <div class="btn">
          <span>5个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="left">
        <i class="icon"></i>
        <span class="text">
          是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
        </span>
      </div>
      <i class="icon-keyboard_arrow_right right"></i>
    </div>
    <div class="bg">
      <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
    </div>
    <div class="mask">
      <div class="mask-wrap">
        <div class="mask-main">
          <div class="title">嘉禾一品（温都水城）</div>
          <div class="stars"></div>
          <ele-line class="line">
            <span>优惠信息</span>
          </ele-line>
          <ele-list class="list"></ele-list>
          <ele-line class="line">
            <span>商家公告</span>
          </ele-line>
          <div class="text">
            <p>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户</p>
          </div>
        </div>
      </div>
      <div class="mask-footer">
        <i class="icon-close close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from 'components/ele-icon/ele-icon.vue'
import line from 'components/ele-line/ele-line.vue'
import list from 'components/ele-list/ele-list.vue'
  export default {
      name:'ele-header',
      components:{
        'ele-icon':icon,
        'ele-line':line,
        'ele-list':list
      }
  }
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';
.header
  position relative
  font-size 0
  background rgba(7,17,27,.5)
  & > .header-top
      position relative
      padding-top 24px
      padding-left 24px
      padding-bottom 18px
      .avater
        display inline-block
        vertical-align top
        width 64px
        height 64px
        border-radius 2px
        overflow hidden
        margin-right 16px
        img
          width 100%
          height 100%
      .info
        vertical-align top
        display inline-block
        color rgb(255,255,255)  
        .title
          font-size 16px 
          margin-top 2px
          margin-bottom 8px
          .brand
            bg-image(brand)
            vertical-align top
            display inline-block
            width 30px
            height 18px
            margin-right 6px
            background-size 100%
            background-repeat no-repeact
          .name 
            vertical-align top 
            font-weight 800
        .msg
          font-size 12px
          margin-bottom 10px
          line-height 12px 
          font-weight 200 
          // .msginfo
          //   line-height 12px 
          //   font-weight 200 
        .support
          font-size 10px
          margin-bottom 2px
          .text
            vertical-align top  
            font-weight 200
            line-height 12px 
        .btn
          position absolute
          right 12px
          bottom 36px
          width 48px
          height 24px
          line-height 24px
          font-size 10px
          border-radius 14px
          text-align center
          background-color rgba(0,0,0,.2)
  & > .header-bottom
      position relative
      width 100%
      height 28px
      line-height 28px
      color rgb(255,255,255) 
      font-size 10px 
      font-weight 200
      background rgba(7,17,27,.2)
      .left
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        margin-right 26px
        .icon
          bg-image(bulletin)  
          display inline-block
          width 22px
          height 12px
          background-size 100%
          background-repeat no-repeat
          margin-left 12px
          margin-right 4px  
          position relative
          top 1px 
      .right
        position absolute
        right 12px
        bottom 8px
  & > .bg  
    position absolute
    let 0
    top 0
    right 0
    bottom 0
    z-index -1
    filter blur(5px)
    img
      width 100%
      height 100%
  & > .mask
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 9
    background-color rgba(7,17,27,.8) 
    backdrop-filter blur(5px);  
    padding-top 64px
    overflow-y auto
    .mask-wrap
      min-height 100%
      .mask-main
        margin-bottom 96px
        .title
          font-size 16px
          font-weight 700
          color rgb(255,255,255)
          line-height 16px
          text-align center
        .stars
           width 100%
           height 24px
           margin-top 16px
           margin-bottom 18px
           background-color pink 
        .line
          width 80%
          margin 0 auto 
        .list
          width 80%
          margin 0 auto 28px
        .text
          font-size 12px
          font-weight 200
          color rgb(255,255,255)
          line-height 24px
          width 80%
          margin 24px auto 0
          p
            padding-left 12px
            padding-right 12px    
    .mask-footer
      margin-top -96px
      padding 32px 0
      text-align center 
      .close
        font-size 32px
        color rgba(255,255,255,.5)   
</style>
