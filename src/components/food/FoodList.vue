<template>
  <div class="foodList">
    <div class="type">
      <ul>
        <li class="dangao"
          v-for="(item,index) in types"
          :key="index">
          <img :src="item.img"
            alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>
      <ul>
        <li class="dangao"
          v-for="(type,index) in types2"
          :key="index">
          <img :src="type.img"
            alt="">
          <p>{{type.name}}</p>
        </li>
      </ul>
    </div>
    <hr>

    <h3>附近商家</h3>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'FoodList',
  data() {
    return {
      types: [
        {
          img: '../../../static/img/food-1.jpg',
          name: '汉堡'
        },
        {
          img: '../../../static/img/food-5.jpg',
          name: '披萨'
        },
        {
          img: '../../../static/img/food-6.jpg',
          name: '意面'
        },
        {
          img: '../../../static/img/food-3.jpg',
          name: '牛排'
        }],
      types2: [
        {
          img: '../../../static/img/food-1.jpg',
          name: '炒菜'
        },
        {
          img: '../../../static/img/food-5.jpg',
          name: '凉菜'
        },
        {
          img: '../../../static/img/food-6.jpg',
          name: '果蔬'
        },
        {
          img: '../../../static/img/food-3.jpg',
          name: '饮料'
        },

      ]
    }
  }

}
</script>
<style scoped>
.test {
  width: 100%;
  height: 100px;
  background-color: aqua;
}
h3 {
  color: grey;
  margin: 0;
}
hr {
  border: none;
  height: 5px;
  background: gre;
  background-color: darkgray;
}
.type {
  width: 100%;
}
.dangao {
  position: relative;
  width: 20%;
  margin: 10px 0;
  flex: 1;
}
.dangao img {
  width: 55px;
  height: 55px;
  filter: brightness(80%);
  border-radius: 50%;
  display: block;
  margin: auto;
  border: 2px solid white;
}
.dangao p {
  position: absolute;
  top: 20%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
}
.foodList {
  margin: 3rem 8px;
}
.type ul {
  margin: 0;
  padding: 0;
  display: flex;
}
</style>