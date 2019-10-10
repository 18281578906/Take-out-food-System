<template>
    <div class="header">
        <div class="search"><i class="el-icon-search"></i></div>
        <div class="title">  <h3 >糕点外卖</h3></div>   
       <div class="user" v-show="$store.state.flag">
           <router-link to="/login">{{$t('m.login')}}/</router-link>
           <router-link to="/register">注册</router-link> 
        <button @click="changeLangEvent">切换语言</button> 
               </div>
    </div>
</template>
<script>
    export default {
        name:'Header',
         data(){
            return{
                  lang: 'zh_CN',//select选中的值

            }

        },
        methods: {
            //切换语言
         changeLangEvent() {
            this.$confirm('确定切换语言吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {                   
                if (this.lang === 'zh-CN' ) {
                    console.log(this.lang);
                    this.lang = 'en-US';
                    this.$i18n.locale = this.lang;//关键语句
                }else {
                    console.log(this.lang);
                    this.lang = 'zh-CN';
                    this.$i18n.locale = this.lang;//关键语句
                }
                }).catch(() => {
                this.$message({
                    type: 'info',
                });          
                });

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
        text-align: center
    }
    
    a {
        text-decoration: none;
        color: #ffffff;
    }
</style>