<template>
  <div class="header">
    <div class="search">
      <i class="el-icon-search"></i>
      <a class="place"><i class="el-icon-location-information"
          @click="city">{{LocationCity}}</i></a>
      <a @click="changeLangEvent">主题语言</a>
    </div>
    <div class="title">
      <h3>糕点外卖</h3>
    </div>
    <div class="user"
      v-show="$store.state.flag">
      <router-link to="/login">{{$t('m.Login_Name')}}</router-link>
      <router-link to="/register">/{{$t('m.Register_Name')}}</router-link>
    </div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  name: 'Header',
  data() {
    return {
      lang: 'zh-CN',//select选中的值
      LocationCity: "定位",
    }
  },
  mounted() {

  },
  methods: {
    //切换语言
    changeLangEvent() {
      this.$confirm('确定切换语言吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.lang === 'zh-CN') {
          this.lang = 'en-US';
          this.$i18n.locale = this.lang;//关键语句
          this.$message({
            message: 'change success ！',
            type: 'info',          });
        } else {
          this.lang = 'zh-CN';
          this.$i18n.locale = this.lang;//关键语句
          this.$message({
            message: '切换成功！',
            type: 'info',          });
        }
      }).catch(() => {
        this.$message({
          message: '操作取消！',
          type: 'info',
        });
      });

    },
    city() {
      this.$confirm('开始定位?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //定义获取城市方法
        const geolocation = new BMap.Geolocation();
        var _this = this
        geolocation.getCurrentPosition(function getinfo(position) {
          console.log(position)
          let city = position.address.city;             //获取城市信息
          let province = position.address.province;    //获取省份信息
          _this.LocationCity = city;
          _this.$message({
            message: '定位成功！',
            type: 'info',
          })
        }, function (e) {
          _this.$message({
            message: '定位失败！',
            type: 'info',
          })
        }, { provider: 'baidu' });

      })


    },
  }
}
</script>
<style scoped>
i {
  font-size: 20px;
}
.header {
  height: 3rem;
  line-height: 3rem;
  background-color: #0fa774;
  position: fixed;
  z-index: 100;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  color: #ffffff;
  padding: 0 0.5rem;
}

.search,
.title,
.user {
  flex: 1;
}

.title {
  text-align: center;
}

.title h3 {
  margin: 0;
}

.user {
  text-align: center;
}

a {
  text-decoration: none;
  color: #ffffff;
}
.place i {
  font-size: 15px;
}
</style>