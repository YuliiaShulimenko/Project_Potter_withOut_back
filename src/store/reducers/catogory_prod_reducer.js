

///////////////////////////////////////////////////////////////////////
//-ПОСТАРАТЬСЯ УСПЕТЬ ОБЪЕДЕНИТЬ РЕДЬЮСЕРЫ ПРОДУКТС И ПРОДУКТС БАЙ КАТ//

const default_state = {
  category: {},
  data: [],
};

const LOAD_PROD_BY_CATEG = "LOAD_PROD_BY_CATEG";
const SORT_CATEGORY_PRODUCTS = "SORT_CATEGORY_PRODUCTS";
const FILTER_CATEGORY_PRODUCTS = "FILTER_CATEGORY_PRODUCTS";
const DISCOUNT_CATEGORY_ITEMS = "DISCOUNT_CATEGORY_ITEMS";

export const productsByCategoryAction = (payload) => ({
  type: LOAD_PROD_BY_CATEG,
  payload,
});
export const sortCategoryProductsAction = (payload) => ({
  type: SORT_CATEGORY_PRODUCTS,
  payload,
});
export const filterCategoryProductsAction = (payload) => ({
  type: FILTER_CATEGORY_PRODUCTS,
  payload,
});
export const discountCategoryItemsAction = (payload) => ({
  type: DISCOUNT_CATEGORY_ITEMS,
  payload,
});



export const productsByCategoryReducer = (state = default_state, action) => {
  if (action.type === LOAD_PROD_BY_CATEG) {
    action.payload.data = [
      ...action.payload.data.map((el) => ({
        ...el,
        showByKeyWord: true,// для поиска по компоненту Серч
        show_product: true,// для фильтра
        sale_products: true,// для чекбокса
      })),
    ];
    return { ...action.payload };
  } else if (action.type === SORT_CATEGORY_PRODUCTS) {
    const sortedData = [...state.data];

    if (action.payload === "title") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      sortedData.sort(
        (a, b) =>
          (a.discont_price ? a.discont_price : a.price) -(b.discont_price ? b.discont_price : b.price)
      );
    } else if (action.payload === "price_desc") {
      sortedData.sort(
        (a, b) =>
          (b.discont_price ? b.discont_price : b.price) -(a.discont_price ? a.discont_price : a.price)
      );
    } else if (action.payload === "default") {
      sortedData.sort((a, b) => a.id - b.id);
    }

    return { ...state, data: sortedData };
  } else if (action.type === FILTER_CATEGORY_PRODUCTS) {
    const { min_value, max_value } = action.payload;
    const filteredData = state.data.map((el) => {
      if (
        (el.discont_price ? el.discont_price : el.price) >= min_value &&
        (el.discont_price ? el.discont_price : el.price) <= max_value
      ) {
        return { ...el, show_product: true };
      } else {
        return { ...el, show_product: false };
      }
    });

    return { ...state, data: filteredData };
  } else if (action.type === DISCOUNT_CATEGORY_ITEMS) {
    if (action.payload) {
      const updatedData = state.data.map((el) => {
          // Доб фильт для отображения,т.е доб новое свойство по кот будем фильтровать
        if (el.discont_price === null) {
          return { ...el, sale_products: false };
        } else {
          return { ...el, sale_products: true };
        }
      });
      return { ...state, data: updatedData };
    } else {
       // Удаляем фильтр и возвращаем исходный стейт
      const updatedData = state.data.map((el) => {
        return { ...el, sale_products: true };
      });
      return { ...state, data: updatedData };
    }
  }

  return state;
};




// else if(action.type === FILTER_PRODUCTS) {
//   const { min_value, max_value } = action.payload;
//   return state.map(el => {
//     let actualPrice = el.discont_price || el.price
//     if(actualPrice >= min_value && actualPrice <= max_value){
//       el.show_product = true
//     } else {
//       el.show_product = false
//     }
//     return el
//   })
// }

// else if(action.type === FILTER_PRODUCTS){
//       const {minValue, maxValue} = action.payload
      
//       const filterData = state.data.map(el => {
//           let actualPrice = el.discont_price || el.price;
//           if (actualPrice >= minValue && actualPrice <= maxValue) {
//               el.show_product = true;
//           } else {
//               el.show_product = false;
//           }
//           return el
//       });
//       return {...state, data: filterData }
//   }
