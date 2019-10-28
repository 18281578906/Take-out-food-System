<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="info">
          <div class="img">
            <el-avatar :size="80"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="user"
            v-show="$store.state.flag">
            <p class="login">
              <router-link to="/login">登录/</router-link>
            </p>
            <p class="register">
              <router-link to="/register">注册</router-link>
            </p>
          </div>
          <div class="user"
            v-show="!($store.state.flag)">
            <p class="login"
              @click="logOut"> 退出登录</p>
          </div>
          <div class="phone">
            <p><i class="el-icon-phone-outline"></i><a :href="'tel:' + this.$store.state.phone">{{this.$store.state.phone}}</a></p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'homeuser',
  methods: {
    logOut() {
      localStorage.removeItem('phone');
      localStorage.removeItem('msg');
      localStorage.removeItem('flag');
      alert("退出登录成功！");
      this.$router.go(0);

    }
  }

}
</script>
<style scoped>
.user {
  position: absolute;
  left: 130px;
}
.phone {
  position: absolute;
  left: 95px;
  top: 35px;
}
.img {
  padding: 6px;
}
.info p,
.img {
  float: left;
  font-size: 14px;
}
.info a {
  color: #ffffff;
  font-size: 14px;
}
.info {
  border-top: 2px solid #ffffff;
  min-height: 6rem;
  background-color: #0fa774;

  color: #ffffff;
}
</style>