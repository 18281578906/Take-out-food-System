<template>
  <div class="shopList">
    <div class="shop">

      <ul>
        <li v-for="(item,index) in shop"
          :key="index">
          <router-link :to="'/food/foodDetail/'+item.shopId">
            <div class="left"> <img :src="item.img"
                alt=""></div>
            <div class="center">
              <h5 class="title"><span class="span">品牌</span> {{item.shopName}}</h5>
              <p class="xinyu">商家信誉度:{{item.xinyu}}</p>
              <p class="send">配送方式:{{item.send}}</p>
            </div>
            <div class="right">
              <p class="promise">{{item.promise}}</p>
              <p class="zhuan">{{item.zhuan}}</p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'

export default {
  name: 'FoodList',
  data() {
    return {

      shop: [],
    }
  },
  mounted() {
    Axios.get('../../../static/data/shopList.json').then((res) => {
      this.shop = res.data.shop;
      console.log(this.shop)
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {


  }
}
</script>
<style scoped>
ul {
  padding-left: 0;
}
.zhuan {
  height: 20px;
  line-height: 20px;
  border: 1px solid #0fa774;
  color: #0fa774;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}
shop h5 {
  margin: 0;
}
.span {
  padding: 0 5px;
  height: 5px;
  background-color: tomato;
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
}
.shopList {
  width: 100%;
  height: auto;
}
p {
  font-size: 12px;
  margin: 5px 0 0;
}

.shop {
  width: 100%;
  height: auto;
}
.shop li {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid darkgray;
  padding-bottom: 10px;
}
.shop a {
  display: flex;
}
.left {
  flex: 1;
}
.center {
  flex: 2;
  padding-left: 10px;
}
.right {
  text-align: center;
  flex: 1;
  padding-top: 18px;
}
.left img {
  width: 90%;
  height: 90%;
  padding: 5%;
}
</style>

