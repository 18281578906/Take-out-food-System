import Vue from 'vue'
import Router from 'vue-router'
import Food from '@/components/food/Food.vue'
import FoodList from '@/components/food/FoodList.vue'
import FoodDetail from '@/components/food/FoodDetail.vue'
import FoodShop from '@/components/food/FoodShop.vue'
import FoodType from '@/components/food/FoodType.vue'
import Home from '@/components/home/Home.vue'
import HomeUser from '@/components/home/HomeUser.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import Cart from '@/components/cart/Cart.vue'
import CartList from '@/components/cart/CartList.vue'
import Login from '@/components/user/Login.vue'
import Register from '@/components/user/Register.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/food'
        },
        {
            path: '/food',
            name: 'Food',
            component: Food,
            redirect: '/food/foodList/foodShop',
            children: [{
                path: 'foodList',
                component: FoodList,
                children: [{
                    path: 'foodShop',
                    component: FoodShop
                }]
            }]
        }, {
            path: '/food/fooddetail/:shopId',
            component: FoodDetail,
            children: [{
                path: '',
                component: FoodType
            }]
        }, {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            redirect: '/cart/cartList',
            children: [{
                path: 'cartList',
                component: CartList
            }]
        },
        {
            path: '/home',
            name: 'Home',
            meta: { title: 'Home' },
            component: Home,
            redirect: '/home/homeNav',
            children: [{
                path: 'homeNav',
                components: {
                    defult: Home,
                    top: HomeUser,
                    bottom: HomeNav
                }
            }]
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }

    ]
})