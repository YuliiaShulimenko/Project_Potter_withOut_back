const ADD_TO_CART = "ADD_TO_CART";
const INCR_COUNT = "INCR_COUNT";
const DECR_COUNT = "DECR_COUNT";
const CLEAR_CART = 'CLEAR_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const incrimentCartAction = (payload) => ({ type: INCR_COUNT, payload });
export const decrimentCartAction= (payload) => ({ type: DECR_COUNT, payload });
export const deleteFromCartAction = payload => ({ type: DELETE_FROM_CART, payload });
export const clearCartAction = () => ({ type: CLEAR_CART });

// Если продукта нет в корзине, то мы берем action.payload, добавляем к нему count: 1 и измененный объект добавляем в состояние
// Если продукт есть в корзине, то мы обращаемся к свойству count этого продукта и увеличиваем значение на 1

//action payload это продукт по которому мы кликнули для добавления в корзину
//стэйт -вся корзина
//пейлоуд-то,что передаю с функией

const defualtState = JSON.parse(localStorage.getItem('cart')) ?? [] //оператор нулевого слияния


//это для каунта продукта
const checkProduct = (state, payload) => {
  const productInCart = state.find((el) => el.id === payload.id);
  if (!productInCart) {
    // !productInCart (false) --- productInCart === undefined
    return [...state, { ...payload, count: 1 }];
  } else {
    productInCart.count++;
    return [...state];
  }
};

export const cartReducer = (state = defualtState, action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === INCR_COUNT) {
    const prod_incr= state.find(el=> el.id === action.payload)
    prod_incr.count++
    return [...state];

  } else if (action.type === DECR_COUNT) {
    const prod_incr= state.find(el=> el.id === action.payload)
    if(prod_incr.count > 0){
      prod_incr.count--
    }
    return [...state];
  } else if (action.type === DELETE_FROM_CART) {
    return state.filter(el => el.id !== action.payload)

} else if(action.type === CLEAR_CART) {
  return []
} else {
  return state
}
}