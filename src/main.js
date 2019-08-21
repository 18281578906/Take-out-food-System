// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import fastClick from 'fastclick'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
    //初始化FastClick实例。在页面的DOM文档加载完成后
    // fastClick.attach(document.body);
    /* eslint-disable no-new */
global.API_PROXY = 'http://bird.ioliu.cn/v1/?url='
import store from './store/store.js'
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    components: { App },
    template: '<App/>'
})