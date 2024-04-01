import types from "store/types/menu";
import Axios from "lib/axios";
import { set_error, set_loading } from "./index";
import {
  GET_ALL_MENU,
  GET_CATEGORIES,
  GET_MENU_BY_CATEGORY,
  GET_CATEGORY,
} from "lib/api";

export const set_all_menu = (value) => {
  return {
    type: types.SET_ALL_MENU,
    payload: value,
  };
};

export const set_categories = (value) => {
  return {
    type: types.SET_CATEGORIES,
    payload: value,
  };
};

export const getAllMenu = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const { data, status } = await Axios.get(GET_ALL_MENU);
    if (status === 200) {
      dispatch(set_all_menu(data.data));
    }
  } catch (error) {
    dispatch(set_error("Failed get data"));
    dispatch(set_loading(false));
  } finally {
    dispatch(set_loading(false));
  }
};

export const getMenuByCategory = (value) => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const { data, status } = await Axios.get(GET_MENU_BY_CATEGORY, {
      params: {
        category_id: value,
      },
    });
    if (status === 200) {
      dispatch(set_all_menu(data.data));
    }
  } catch (error) {
    dispatch(set_error("Failed get data"));
    dispatch(set_loading(false));
  } finally {
    dispatch(set_loading(false));
  }
};

export const getMenuSearch = (value) => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const { data, status } = await Axios.get(GET_ALL_MENU + "/search", {
      params: {
        name: value,
      },
    });
    if (status === 200) {
      dispatch(set_all_menu(data.data));
    }
  } catch (error) {
    dispatch(set_error("Failed get data"));
    dispatch(set_loading(false));
  } finally {
    dispatch(set_loading(false));
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch(set_all_menu([]));
  try {
    dispatch(set_loading(true));
    const { data, status } = await Axios.get(GET_CATEGORIES);
    if (status === 200) {
      dispatch(set_categories(data.data));
    }
  } catch (error) {
    dispatch(set_error("Failed get data"));
    dispatch(set_loading(false));
  } finally {
    dispatch(set_loading(false));
  }
};
