//action.payload -строка поиска

///////////////////////////////////////////////////////////////////////
//-ПОСТАРАТЬСЯ УСПЕТЬ ОБЪЕДЕНИТЬ РЕДЬЮСЕРЫ ПРОДУКТС И ПРОДУКТС БАЙ КАТ//
const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const DISCOUNT_ITEMS = "DISCOUNT_ITEMS";

const inicial_state = [];

export const allProdAction = (payload) => ({type: LOAD_ALL_PRODUCTS,payload,});
export const searchProductsAction = (payload) => ({type: SEARCH_PRODUCTS,payload,});
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS,payload,});
export const filterProductsAction = (payload) => ({type: FILTER_PRODUCTS,payload,});
export const discountItemsAction = (payload) => ({type: DISCOUNT_ITEMS,payload,});




export const productsReducer = (state = inicial_state, action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map((el) => ({ ...el, show_product: true,showByKeyWord :true, sale_products:true}));

    //////////////SEARCH_PRODUCTS////////////
  } else if (action.type === SEARCH_PRODUCTS) {
    const searchQuery = action.payload.toLowerCase(); // Преобразование строки поиска в нижний регистр

    return state.map((el) => {
      if (!el.title.toLowerCase().includes(searchQuery)) { // Преобразование названия товара в нижний регистр и сравнение
        el.showByKeyWord = false;
        return el;
      } else {
        el.showByKeyWord = true;
        return el;
      }
    });

  //,showByKeyWord :true   вписать

    ///////////SORT_PRODUCTS//////////
  } else if (action.type === SORT_PRODUCTS) {
    if (action.payload === "title") {
      state.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      state.sort((a, b) => (a.discont_price ?  a.discont_price : a.price) - (b.discont_price ?  b.discont_price : b.price));

   

    } else if (action.payload === "price_desc") {
      state.sort((a, b) => (b.discont_price ?  b.discont_price : b.price) - (a.discont_price ?  a.discont_price : a.price));


    } else if (action.payload === "default") {
      state.sort((a, b) => a.id - b.id);
    }
    return [...state];

///////////////FILTER_PRODUCTS/////////////////
  } else if (action.type === FILTER_PRODUCTS) {
    const { min_value, max_value } = action.payload;
    
    return state.map((el) => {
       if ((el.discont_price ?  el.discont_price : el.price) >= min_value && (el.discont_price ?  el.discont_price : el.price)  <= max_value)
      // if ( el.price >= min_value && el.price  <= max_value) 
    {
        el.show_product = true;
      } else {
        el.show_product = false;
      }
      return el;
    });
///////////////DISCOUNT ITEMS///////////////
  } else if (action.type === DISCOUNT_ITEMS) 
  if (action.payload) {
    return state.map(el => {
      if (el.discont_price === null) {
        el.sale_products= false;
      }
      return el
    })
  } else {
    return state.map(el => ({ ...el, sale_products: true}))
  }

  return state;
};

