<template>
    <router-view v-if="isRouterAlive"/>
</template>

<script>
export default {
  name: 'App',
  //刷新页面
  provide(){
    return{
      reload:this.reload
    }
    
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
