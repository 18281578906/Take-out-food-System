var mutations = {
    setPhone(state, num) { // state是个形参 是state对象里面的数据都可以拿到 不通过this来拿
        state.phone = num;
        state.msg = 'success';
        state.flag = false;
        localStorage.setItem('phone', num);
        localStorage.setItem('msg', 'success');
        localStorage.setItem('flag', false);
    },
    cartFood(state, food) {
        var cartFood = state.cartFood;
        //判断里面是否存在
        for (var i = 0; i < cartFood.length; i++) {
            if (cartFood[i].foodId === food.foodId) {
                cartFood[i].num += 1;
                break;

            }
        }
        if (i === cartFood.length) {
            cartFood.push(food);
            cartFood[i].num = 1;
        }

        localStorage.setItem('cartFood', JSON.stringify(cartFood));
    },
    addAndRemoveCartFood(state, data) {
        var cartFood = state.cartFood;
        for (var i = 0; i < cartFood.length; i++) {
            if (cartFood[i].foodId === data.foodId) {
                cartFood[i].num = data.number;
                break;
            }
        }
        localStorage.setItem('cartFood', JSON.stringify(cartFood));
    },
    deleteCartFood(state, arr) {
        state.cartList.push(arr);
        state.cartFood = [];
        localStorage.setItem('cartFood', null);
        localStorage.setItem('cartList', JSON.stringify(state.cartList));

    },


}
export default mutations