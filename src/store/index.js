import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { categoriesReducer } from './reducers/categories_reducer';
import { productsByCategoryReducer  } from './reducers/catogory_prod_reducer';
import { productsReducer } from './reducers/products_reducer';
import { oneProductReducer } from './reducers/product_item_reducer';
import { cartReducer } from './reducers/cart_reducer';
import { likedProductsReducer } from './reducers/liked_reducer';



const rootReducer = combineReducers({
cart:cartReducer,
categories:categoriesReducer,
prodCategory:productsByCategoryReducer,
allProducts:productsReducer,
oneProduct:oneProductReducer,
liked:likedProductsReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));