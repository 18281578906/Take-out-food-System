<template>
    <div>  
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple">我的</div></el-col>    
      </el-row>
      <router-view name="top"></router-view>
    <el-row>
        <div class="person">
        <el-col :span="8">
            <div class="money">
                <p><span> 0.00</span>元</p>
               <p>我的余额</p>
            </div>
        </el-col>
         <el-col :span="8">
             <div class="money">
                <p><span>0</span> 个</p>
               <p>我的优惠</p>
            </div>
         </el-col>
          <el-col :span="8">
              <div class="money jifen">
                <p><span>0</span> 个</p>
               <p>我的积分</p>
            </div>
          </el-col>
          </div>
    </el-row>
       <router-view name="bottom"></router-view>
         <footer-common></footer-common>   
    </div>
</template>
<script>
import FooterCommon from '../common/Footer'
export default {
    name:'Home',
    components:{
        FooterCommon
    },
}
</script>
<style scoped>
.jifen{
     border-right:none!important;
}
.person .money{
    border-right: 1px solid #f6f3f3;
    padding: 10px 0;
}
.person .money p{
      margin: 0;  
      padding: 5px 0;
}

.person .money p:first-child span{
    font-size: 20px;
    color: red;
}
.person{
    height: 6rem;
    text-align: center;
    border-bottom: 5px solid #f6f3f3;
}

 .grid-content {
    min-height: 3rem;
    background-color: #0fa774;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    line-height: 3rem;
  }
</style>
