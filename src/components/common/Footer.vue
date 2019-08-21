<template>
    <div class="footer">
        <div class="food" ><router-link to="/food"><i class="el-icon-house"></i><p>菜品</p> </router-link></div>
        <div class="cart" ><router-link to="/cart"><i class="el-icon-shopping-cart-full"></i><p>购物车</p> </router-link></div>
         <div class="home" ><router-link to="/home"><i class="el-icon-user"></i><p>我的</p> </router-link></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.router-link-active{
    color:#a4351d;
}
i{
      position: absolute;
    text-indent: -15px;
    font-size: 30px;
    top:3px;
}
/* .food i,.food p{
    color: rgb(11, 75, 59);

} */
.footer{
    height: 3rem;
    line-height: 3rem;
    background-color:#0fa774;
    position: fixed;
    display: flex;
     z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    padding:0 0.5rem;    
}
.food,.cart,.home{
    flex: 1;
    text-align: center;
    font-size: 12px;
}

p{
    position:relative;
    top:2px;
}

 a{
    text-decoration: none;
    color: #ffffff;
}


</style>
