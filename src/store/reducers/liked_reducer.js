const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';
const CLEAR_ALL_FAVORITES = 'CLEAR_ALL_FAVORITES';

const defualtState = JSON.parse(localStorage.getItem('favourite')) ?? [] //оператор нулевого слияния

export const addToFavouritesAction = (payload) => ({ type: ADD_TO_FAVORITES, payload });
export const deleteFromFavouriteAction = payload => ({ type: DELETE_FROM_FAVORITES, payload });
export const clearFavouritesAction = () => ({ type: CLEAR_ALL_FAVORITES });


   


        const checkLiked = (state, payload) => {
            const productLiked = state.find((el) => el.id === payload.id);
            if (!productLiked) {
              // !productInCart (false) --- productInCart === undefined
              return [...state, { ...payload, count: 1 }];
            } else {
                productLiked.count++;
              return [...state];
            }
          };

          export const likedProductsReducer = (state = defualtState, action) => {

        if (action.type === ADD_TO_FAVORITES) {
          return checkLiked(state, action.payload);
        
        } else if (action.type === DELETE_FROM_FAVORITES) {
          return state.filter(el => el.id !== action.payload)
      
      } else if(action.type === CLEAR_ALL_FAVORITES) {
        return []
      } else {
        return state
      }
      }