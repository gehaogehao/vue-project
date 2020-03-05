<template>
  <div id="app">
   <ele-header></ele-header> 
   <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/ele-header.vue'
export default {
  name: 'App',
  components:{
    'ele-header':Header,
  }
}
</script>

<style>

</style>
