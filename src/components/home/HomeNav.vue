<template>
<el-menu>
         <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>我的订单</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>    
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
   mounted(){
       console.log( this.$store.state.cartList)
   }

    
}
</script>
<style scoped>
.el-menu li{
    font-size: 15px;
}

</style>
