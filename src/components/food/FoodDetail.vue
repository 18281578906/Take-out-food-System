<template>
  <div class="detail">
    <div class="header">
      <i class="el-icon-arrow-left"
        @click="backTo"></i>
      <img :src="shop.img"
        alt="">
    </div>
    <div class="center">
      <div class="img"><img :src='shop.img'
          alt=""></div>
      <div class="top">
        <h3 class="title"> <strong>品牌</strong>{{shop.shopName}} <i class="el-icon-caret-right"></i></h3>

        <div class="info">
          <p>评分：{{shop.xinyu}}</p>
          <p>月售20单</p>
          <p>{{shop.zhuan}}</p>
          <p>约30分钟</p>
          <p>距离2000米</p>
        </div>
        <div class="youhui">
          <select name=""
            id="select">
            <option value="">首单新用户下单立减10元，不与其他活动共享 (<i>2个优惠</i>)</option>
            <option value="满30-5">满30-5</option>
            <option value="满30-5">满30-5</option>
            <option value="满30-5">满30-5</option>
          </select>
        </div>
      </div>
      <div class="bottom">
        <ul class="nav">
          <li v-bind:class="{'order1':order1}"
            @click="clickChange(1)">点餐</li>
          <li v-bind:class="{'order2':order2}"
            @click="clickChange(2)">评价</li>
          <li v-bind:class="{'order3':order3}"
            @click="clickChange(3)">商家</li>
        </ul>
        <div class="food"
          v-show="order1">
          <div class="food-type">
            <ul>
              <li>
                <p>折扣</p>
              </li>
              <li>
                <p>家常菜</p>
              </li>
              <li>
                <p>美味粥</p>
              </li>
              <li>
                <p>干锅</p>
              </li>
              <li>
                <p>凉拌菜</p>
              </li>
              <li>
                <p>饮料</p>
              </li>
              <li>
                <p>折扣</p>
              </li>
              <li>
                <p>家常菜</p>
              </li>
              <li>
                <p>美味粥</p>
              </li>
              <li>
                <p>干锅</p>
              </li>
              <li>
                <p>凉拌菜</p>
              </li>
              <li>
                <p>饮料</p>
              </li>
            </ul>
          </div>
          <div class="food-list">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">

      <div class="icon-nav">
        <div class="icon">
          <router-link to="/cart/cartList"><i class="el-icon-shopping-cart-full"></i> </router-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      order1: true,
      order2: false,
      order3: false,
      shopId: '',
      shop: []
    }
  },
  mounted() {
    Axios.get('../../../static/data/shopList.json').then(res => {
      this.shopId = this.$route.params.shopId;//参数  shopId
      for (var item of res.data.shop) {
        if (item.shopId === this.shopId) {
          this.shop = item;
          console.log(item)
        }
      }
    }).catch(err => {
      console.log(err)
    });

  },
  methods: {
    clickChange: function (num) {
      if (num === 1) {
        this.order1 = true;
        this.order2 = false;
        this.order3 = false;
      }
      if (num === 2) {
        this.order1 = false;
        this.order2 = true;
        this.order3 = false;
      }
      if (num === 3) {
        this.order1 = false;
        this.order2 = false;
        this.order3 = true;
      }

    },
    backTo: function () {
      history.back();
    }

  }

}
</script>
<style scoped>
.header i {
  position: absolute;
  font-size: 25px;
  z-index: 1;
  color: #e2dddd;
  margin: 5px;
}
.icon-nav {
  border-radius: 180px;
  height: 85px;
  width: 85px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: -19px;
  left: 28px;
}
.icon {
  border-radius: 180px;
  height: 65px;
  width: 65px;
  background-color: #585555;
  position: absolute;
  left: 10px;
  top: 10px;
}
.icon i {
  position: absolute;
  font-size: 50px;
  left: 8px;
  color: #c7baba;
  line-height: 65px;
  z-index: 20;
  text-align: center;
}
.food-type li p {
  position: relative;
  line-height: 60px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 15px;
  color: #3a3737;
}
.food-type li {
  text-align: center;
  height: 60px;

  background-color: #eae2d8;
  border-bottom: 1px solid #aaa1a145;
}
ul {
  padding-left: 0;
}
.food-list {
  flex: 3;
}
.food-type {
  margin-right: 5px;
  flex: 1;
}
.food {
  display: flex;
}
.detail {
  overflow-x: hidden;
}
.order1,
.order2,
.order3 {
  color: #0fa774;
}
#select {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 8px;
}
.youhui {
  width: 80%;
  border: 1px solid green;
  height: 25;
  border-radius: 5px;
  margin: 0 auto;
}
.bottom {
  position: relative;
  top: -40px;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  bottom: 0;
  z-index: 10;
}
.nav li {
  flex: 1;
  text-align: center;
}
.nav {
  /* width: 100%; */
  display: flex;
}
.info p {
  font-size: 12px;
  float: left;
  padding: 0 5px;
}
strong {
  padding: 0 5px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: tomato;
  font-size: 14px;
  font-weight: normal;
}
h3 {
  margin: 0;
}
.top {
  width: 100%;
  height: 100px;
  position: relative;
  top: -40px;
}
.title span,
.title h3 {
  float: left;
}
.title {
  width: 100%;
  text-align: center;
}

.info {
  width: 90%;

  margin-left: 5%;
  display: inline-block;
  text-align: center;
}
.img img {
  width: 60%;
  height: 60%;
  padding: 20%;
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid grey;
  margin: 0 auto;
  position: relative;
  top: -40px;
  background: #ffff;
}
.center {
  height: 200px;
  background-color: #ffffff;
  position: absolute;
  top: 70px;
  z-index: 10;
  width: 100%;
}
body,
html {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 200px;
  position: relative;
}
.header img {
  opacity: 0.8;
  width: 100%;
  height: 100%;
}
</style>

