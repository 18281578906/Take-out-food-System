<template>
    <div class="header">
        <div class="search"><i class="el-icon-search"></i></div>
        <div class="title">  <h3 >糕点外卖</h3></div>
     
       <div class="user" v-show="$store.state.flag">
           <router-link to="/login">登录/</router-link>
           <router-link to="/register">注册</router-link>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
i{
    font-size: 20px;
}
.header{
    height: 3rem;
    line-height: 3rem;
    background-color:#0fa774;
    position: fixed;
    z-index: 100;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    padding:0 0.5rem;
    
}
.search,.title,.user{
    flex: 1;

}
.title{
    text-align: center;
}
.title h3{
    margin: 0;
}
.user{
    text-align: center
}
 a{
    text-decoration: none;
    color: #ffffff;
}


</style>
