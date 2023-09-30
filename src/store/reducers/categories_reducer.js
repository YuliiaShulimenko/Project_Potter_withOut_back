const default_state = [];
const LOAD_CATEGORIES = "LOAD_CATEGORIES";


export const categoriesReducer = (state = default_state, action) => {
  if (action.type === LOAD_CATEGORIES) {
    return action.payload;
  } else {
    return state;
  }
};

export const categAllAction = payload => ({ type: LOAD_CATEGORIES, payload });
