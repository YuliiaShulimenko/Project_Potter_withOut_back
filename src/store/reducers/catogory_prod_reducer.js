const default_state = {
  category: {},
  data: [],
};

const LOAD_PROD_BY_CATEG = "LOAD_PROD_BY_CATEG";

const SORT_CATEGORY_PRODUCTS = "SORT_CATEGORY_PRODUCTS";
const FILTER_CATEGORY_PRODUCTS = "FILTER_CATEGORY_PRODUCTS";
const DISCOUNT_CATEGORY_ITEMS = "DISCOUNT_CATEGORY_ITEMS";


export const products_by_category_Action = payload => ({ type: LOAD_PROD_BY_CATEG, payload });
export const sortCategoryProductsAction = (payload) => ({type: SORT_CATEGORY_PRODUCTS,payload,});
export const filterCategoryProductsAction = (payload) => ({type: FILTER_CATEGORY_PRODUCTS,payload,});
export const discountCategoryItemsAction = (payload) => ({type: DISCOUNT_CATEGORY_ITEMS,payload,});


export const products_by_category_Reducer = (state = default_state, action) => {
 
 
  if (action.type === LOAD_PROD_BY_CATEG) {
    action.payload.data=[...action.payload.data.map(el=>({...el, showByKeyWord:true,show_product: true,sale_products:true}))]
    return {...action.payload}
    
     ///////////SORT_PRODUCTS//////////
    } else if (action.type === SORT_CATEGORY_PRODUCTS) {
      const sortedData = [...state.data]; 
    
      if (action.payload === "title") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === "price_asc") {
        sortedData.sort((a, b) =>
      (a.discont_price ?  a.discont_price : a.price) - (b.discont_price ?  b.discont_price : b.price))
        ;
      } else if (action.payload === "price_desc") {
        sortedData.sort((a, b) =>
        (b.discont_price ?  b.discont_price : b.price) - (a.discont_price ?  a.discont_price : a.price))
        ;
      } else if (action.payload === "default") {
        sortedData.sort((a, b) => a.id - b.id);
      }
    
      return { ...state, data: sortedData };
    
    

///////////////FILTER_PRODUCTS/////////////////
} else if (action.type === FILTER_CATEGORY_PRODUCTS) {
  const { min_value, max_value } = action.payload;
  const filteredData = state.data.map((el) => {
   
    if((el.discont_price ?  el.discont_price : el.price) >= min_value && (el.discont_price ?  el.discont_price : el.price)  <= max_value) {
      return { ...el, show_product: true };
    } else {
      return { ...el, show_product: false };
    }
  });

  return { ...state, data: filteredData };


  
///////////////DISCOUNT ITEMS///////////////


} else if (action.type === DISCOUNT_CATEGORY_ITEMS) {
  const updatedData = state.data.map((el) => {
    if (el.discont_price === null) {
      return { ...el, sale_products: false };
    } else {
      return { ...el, sale_products: true };
    }
  });

  return { ...state, data: updatedData };
}

return state
};









    