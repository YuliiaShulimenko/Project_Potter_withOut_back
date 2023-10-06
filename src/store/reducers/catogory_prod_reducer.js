const default_state = {
  category: {},
  data: [],
};

const LOAD_PROD_BY_CATEG = "LOAD_PROD_BY_CATEG";

export const products_by_category_Reducer = (state = default_state, action) => {
 
 
  if (action.type === LOAD_PROD_BY_CATEG) {
    action.payload.data=[...action.payload.data.map(el=>({...el, showByKeyWord:true,show_product: true,sale_products:true}))]
    return {...action.payload}
    
    
    
  } else {
    return state;
  }
};
export const products_by_category_Action = payload => ({ type: LOAD_PROD_BY_CATEG, payload });