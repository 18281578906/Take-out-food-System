<template>
<el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>我的订单</template>
          <el-submenu :index="1+'-'+index" v-for="(menu, index) in bookList" :key="index">
            <template slot="title"><span>下单时间 : {{menu[menu.length-1].bookTime}}</span>  <strong>共:{{menu[menu.length-1].totalPrice}}元</strong></template>
            <el-menu-item :index="1+'-'+index+'-'+n"  v-for="(item, n) in bookList[index]" :key="n" v-if="n<getNumber(index)">{{item.foodName+"+"+item.num+"份"+"+"+item.price*item.num+"元"}}<el-image :src="item.img"></el-image></el-image></el-menu-item>
          </el-submenu>   
      </el-submenu>
      
          <el-submenu index="2">
              <template slot="title"><i class="el-icon-box"></i> 积分商城</template>
               <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group> 
          </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-bank-card"></i> 会员卡</template>
               <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group> 
          </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-s-cooperation"></i> 服务中心</template>
               <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group> 
          </el-submenu>
 </el-menu>    

   
</template>
<script>

export default {
    name:'homeNav',
    data(){
      return{
        bookList:[],
      }
    },
   mounted(){
      this.bookList= this.$store.state.cartList;

   },
   methods: {
     getNumber:function(index){
     let num=this.bookList[index].length-1;
       return num;

     }
   },

    
}
</script>
<style scoped>
.el-menu li{
    font-size: 15px;
}
.el-menu span{
  font-size:13px;
  margin-left:10px;
}
.el-menu strong{
  color:red;

}
.el-submenu .el-menu-item{
  font-size:13px;
}
.el-image{
  width:70px;
  height:45px;
  margin-left:50px;
}
</style>
