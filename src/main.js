// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import fastClick from 'fastclick'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'
import VueI18n from 'vue-i18n'
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.config.productionTip = false
const i18n = new VueI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': require('./common/lang/en'),
        'en-US': require('./common/lang/en')
    }
})


new Vue({
    el: '#app',
    render: h => h(App),
    i18n,
    router,
    store,
    components: { App },
    template: '<App/>'
})