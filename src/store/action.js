import { GET_CATEGORIES, GET_CATS, SET_CATEGORY_ID, SET_PAGE } from "./type";
import Axios from "./../api/api";

export const getCategories = () => {
  return async (dispatch) => {
    const categories = await Axios.get("categories");
    if (categories.status === 200) {
      dispatch({
        type: GET_CATEGORIES,
        payload: categories.data,
      });
    } else {
      //if request is failed alert about it
      alert("Request failed!");
      return;
    }
  };
};

export const getCats = (categoryId, page) => {
  let url = `images/search?limit=10`;
  if (categoryId)
    url = `images/search?limit=10&category_ids=${categoryId}`;
  return async (dispatch) => {
    const cats = await Axios.get(url);
    if (cats.status === 200) {
      dispatch({
        type: GET_CATS,
        payload: cats.data,
      });
    } else {
      //if request is failed alert about it
      alert("Request failed!");
      return;
    }
  };
};

export const setCategoryId = (id) => {
  return {
    type: SET_CATEGORY_ID,
    payload: id,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
