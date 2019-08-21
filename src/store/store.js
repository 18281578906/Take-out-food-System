import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
export default new Vuex.Store({
    state, //  这里相当于Vue实例中的data，用于存放数据
    mutations, //  这里相当于Vue实例中的methods，用于定义方法 所有的方法都过来拿      
    getters: {
        // 这里可以监听state的值 直接返回出去 只读取值 如果需要修改值 找mutations  需要return出去
        readMsg(state) {
            return '我是store里面的数据' + state.msg
        }
    }
})