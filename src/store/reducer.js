import { state } from "./state";
import { GET_CATEGORIES, GET_CATS, SET_CATEGORY_ID, SET_PAGE } from "./type";

const myState = state;

function reducer(state = myState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      state.categories = action.payload;
      break;
    case GET_CATS:
      state.cats = action.payload;
      break;
    case SET_CATEGORY_ID:
      state.selectedCategoryId = action.payload;
      break;
      case SET_PAGE:
        state.page = action.payload;
        break;
    default:
      break;
  }
  return { ...state };
}

export default reducer;
