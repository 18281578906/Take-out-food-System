<template>
<div class="typeList">
    <div class="shop">
        <ul id="ul">
            <li v-for="(item,index) in shop" :key="index" :class="item.foodId" >
                        <div class="left">   <img :src="item.img"  alt=""></div>  
                        <div class="center">
                            <h5 class="title"><span class="span">招牌</span> {{item.foodName}}</h5>
                            <p class="type"><span>{{item.foodType}}</span><span v-for="(arr,ix) in item.kouwei" :key="ix">{{arr}}</span></p>
                           <p class="num"><span>月销:{{item.yuexiao}}</span> <span>赞:{{item.zan}}</span></p>
                            <p class="price">${{item.price}}</p>
                        </div>
                        <div class="right">
                            <div class="add">
                              <p><span>数量: <i :id="item.foodId">{{item.num}}</i></span> </p>  
                              <p class="increat" ><img src="../../../static/img/add.png" @click="addClick(item.foodId,true)"></p>
                              <p class="remove" > <img src="../../../static/img/remove.png" @click="addClick(item.foodId,false)"></p>
                            </div>                      
                        </div>   
            </li>           
        </ul>  
    </div>
    <div class="bottom" v-show="show">
        <h4>总价：<span class="money">{{totalPrice}}</span>元</h4>
        <div class="pay"> <div class="total" @click="payMoney"><span class="totalPrice">结算</span></div></div>      
    </div> 
     <div class="bottom" v-show="!show">
        <h4>购物车：<span class="money">空空如也</span></h4>
    </div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
    name:'FoodList',
    data() {
        return {
         totalPrice:0,
         shop:[],
         arr:[],
         show:true,
         gettime:'0000-00-00 00:00:00'
        }
    },
    mounted(){           
        this.load();
       
    },
    methods:{
        load(){
        this.shop=this.$store.state.cartFood;
        var list=this.shop;
        for(var i=0;i<list.length;i++){
            this.totalPrice+=list[i].price*list[i].num;
        }

        },
        addClick:function(foodId,flag){
             var num=document.getElementById(foodId);
             var number=parseInt( num.innerText);
             var ul=document.getElementById("ul");
             var price=parseInt(document.getElementsByClassName('price')[0].innerText.split('$')[1]);
             if(flag){
                 number++;
                 num.innerText=number;
                 this.totalPrice+=price;
             }
             else{
                 var par=document.getElementsByClassName(foodId)[0];
                 console.log(par)
                 if(number===0){
                  par.remove();
                  this.arr=[];
                  var list=this.shop;
                  for(var i in list){
                      if(list[i].foodId!==foodId){
                          this.arr.push(list[i]);
                      }
                  }
                   return;
                 }
                 number--;
                 num.innerText=number;
                 this.totalPrice-=price;
             }
             var data={
                 foodId:foodId,
                 number:number
             }
             this.arr=[];
             this.arr=this.shop;
           this.$store.commit('addAndRemoveCartFood',data);

        },
        payMoney:function(){
            if(this.shop.length!==0&&this.arr.length==0){
                this.arr=this.shop;
            }
                console.log(this.arr);         
                this.arr.push({ "bookTime":  this.getTime() ,"totalPrice":this.totalPrice});
                this.$store.commit('deleteCartFood',this.arr);
                alert("结算成功！");
                this.shop=[];
                this.totalPrice=0;
                this.show=false;
                
        },       
        getTime:function(){
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
            _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
             return _this.gettime;
            },
    } 
    }
</script>
<style scoped>
.increat,.remove{
    display:inline-block; 
}
.money{
    color: red;
    font-size: 20px;
}
.bottom{
    display: flex;
}
.totalPrice{
    font-size: 14px;
    color: #ffffff;
    flex: 1;
}
.pay{
    flex:2;
    width: 100%;
    height: 50px;
    
}
.total:hover{
    background-color: red;
}
.total{
       position: relative;
    top: 20px;
    float: right;
    right: 10px;
    text-align: center;
    width: 75px;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    background-color: #eb5b2e;

}
h4{    margin-left: 10px;
    display: inline-block;
}
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
      width:20px;
    height: 20px;
        padding-top: 10px;
}

ul{
    padding-left: 0;
    margin: 0;
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
    margin: 3rem 0;
    overflow-x: hidden;

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
    height: 140px;
    border-bottom: 1px solid darkgray;
     display: flex;
}
.shop a{
    display: flex;
}
.left{
    flex: 2;
    
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

