<template>
<div class="typeList">
    <div class="shop">
        <ul>
            <li v-for="(item,index) in shop" :key="index">
                        <div class="left">   <img :src="item.img" alt=""></div>  
                        <div class="center">
                            <h5 class="title"><span class="span">招牌</span> {{item.foodName}}</h5>
                            <p class="type"><span>{{item.foodType}}</span><span v-for="(arr,ix) in item.kouwei" :key="ix">{{arr}}</span></p>
                           <p class="num"><span>月销:{{item.yuexiao}}</span> <span>赞:{{item.zan}}</span></p>
                            <p class="price">${{item.price}}</p>
                        </div>
                        <div class="right">
                            <p class="add" @click="addFood(index)"><img src="../../../static/img/add.png"></p>
                           
                        </div>   
            </li>
             
        </ul>
    </div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
    name:'FoodList',
    data() {
        return {
         
            shop:[],
        }
    },
    mounted(){
       Axios.get('../../../static/data/foodList.json').then((res)=>{
           console.log(this.$route.params.shopId)//参数  shopId
                console.log(res);
                var list=res.data.shop;
                for(var i=0;i<list.length;i++){
                    if(list[i].shopId===this.$route.params.shopId){
                        this.shop=list[i].foodList;
                    }
                }
                console.log(this.shop)
                  }).catch(err=>{
                         console.log(err);
                  })
    },
    methods:{
        addFood(index){
            this.$store.commit('cartFood',this.shop[index]);
            console.log(this.shop[index]);
        }
    } 
    }
</script>
<style scoped>
 span{
    padding-right:  5px;
}
h5{
    margin-bottom: 5px;
}
.price{
    color:red;
    font-size: 15px;
}
.add img{
     width:100%;
    height: 100%;
}
.add{
    width:20px;
    height: 20px;
}
ul{
    padding-left: 0;
}
.zhuan{
    border: 1px solid #0fa774;
    color: #0fa774;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
}
shop h5{
    margin: 0;
}
.span{
     padding: 0 5px;
    height: 5px;
    background-color: tomato;
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
}
.typeList{
    width:100%;
    height: auto;

}
p{
    font-size: 12px;
    margin:5px 0 0;
}

.shop{
    width: 100%;
    height: auto;
  
}
.shop li{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid darkgray;
 padding-bottom: 10px;
 display: flex;
}
.shop a{
    display: flex;
}
.left{
    flex: 1;
    
}
.center{
    flex:2;
    padding-left: 10px;
}
.right{
    flex: 1;
        padding-top: 18px;
}
.left img{
    width: 90%;
    height: 90%;
    padding: 5%;
}
  
</style>

