<template>
  <div class="login">
    <el-container>
      <el-header style="height:100px;">
        <p>
          <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
          <router-link to="/login">
          <span class="go_login">登录 <i class="el-icon-right"></i></span>
          </router-link>
        </p>
        <h1>注册界面</h1>
      </el-header>
      <el-main class="center">
          <el-row :gutter="24">
            <el-col :span="24">
              <el-input v-model="phoneNum2" placeholder="手机号" clearable></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-input v-model="password2" placeholder="密码" show-password clearable></el-input>
            </el-col>
          </el-row>
           <el-row :gutter="24">
            <el-col :span="24">
              <el-input v-model="password3" placeholder="确认密码" show-password clearable></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="12">
              <el-input v-model="pictureCode"  placeholder="验证码" show-password clearable></el-input>
            </el-col>
            <el-col :span="12">
             <div class="s-canvas" @click="refreshCode">
                  <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
            </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-button class="login-btn2" @click="login2">注册</el-button>
            </el-col>
          </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      
    password3:'',
      //图形验证码变量
       phoneNum2:'',
      password2:'',
      pictureCode:'',
      identifyCodes: '1234567890',
      identifyCode: '1234',
     fontSizeMin: 16,
    fontSizeMax: 40,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    colorMin: 50,
    colorMax: 160,
    lineColorMin:40,
    lineColorMax:180,
    dotColorMin:0,
    dotColorMax: 255,
    contentWidth: 112,
    contentHeight: 38
   };
  },
 
  methods: {
   

   //************图形验证码***************
    // 切换图形验证码
    refreshCode() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
 // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
   // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 生成一个随机的颜色
    randomColor(min, max) {
      var r = this.randomNum(min, max)
      var g = this.randomNum(min, max)
      var b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    drawPic() {
      var canvas = document.getElementById('s-canvas')
      var ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      // 绘制背景
      ctx.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      )
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      // 绘制文字
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    },
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      var x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
      var y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
      var deg = this.randomNum(-45, 45)
      // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0)
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
    drawLine(ctx) {
      // 绘制干扰线
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(
          this.lineColorMin,
          this.lineColorMax
        )
        ctx.beginPath()
        ctx.moveTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        )
        ctx.lineTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        )
        ctx.stroke()
      }
    },
    drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        )
        ctx.fill()
      }
    },
    //方式二登录
   login2(){
    if(this.pictureCode===this.identifyCode){
      alert('登录成功！');
    }
   }
  },
   watch: {
    identifyCode() {
      this.drawPic()
    }
  },
  mounted() {
    this.drawPic()
  }
};
</script>
<style scoped>
.go_login{
    right: 20px;
    top: 5px;
    font-size: 13px;
    position: absolute;
    color: grey;
}
.el-button {
  width: 100%; 
   background-color: #0fa774;
    color:#ffff;
    font-size: 15px;
    font-weight: 400;
}
.nav {
  margin-bottom: 10px;
}
span {
  padding: 10px 0;
  font-size:17px;
}
.type {
  display: none;
}
.active {
  display: block;
}
.fontColr {
  color: #0fa774;
}
.fontColr span {
  border-bottom: 2px solid #0fa774;
}

.login h1 {
    color: #0fa774;
  text-align: center;
}
.center {
  width: 80%;
  margin: 0 auto;
}
.el-col {
  padding: 20px 0;
  text-align: center;
}
</style>
