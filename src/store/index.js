import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { categoriesReducer } from './reducers/categories_reducer';
import { products_by_category_Reducer } from './reducers/catogory_prod_reducer';
import { productsReducer } from './reducers/products_reducer';
import { oneProductReducer } from './reducers/product_item_reducer';
import { cartReducer } from './reducers/cart_reducer';
import { liked_products_Reducer } from './reducers/liked_reducer';



const rootReducer = combineReducers({
cart:cartReducer,
categories:categoriesReducer,
prodCategory:products_by_category_Reducer,
allProducts:productsReducer,
oneProduct:oneProductReducer,
liked:liked_products_Reducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));