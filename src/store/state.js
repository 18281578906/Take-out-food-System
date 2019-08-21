var state = {
    msg: localStorage.getItem('msg') ? localStorage.getItem('msg') : 'not login',
    phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '暂无绑定的手机号',
    flag: localStorage.getItem('flag') == null ? true : false, //未登录
    cartFood: JSON.parse(localStorage.getItem('cartFood')) == null ? [] : JSON.parse(localStorage.getItem('cartFood')),
    cartList: JSON.parse(localStorage.getItem('cartList')) == null ? [] : JSON.parse(localStorage.getItem('cartList')),

}
export default state