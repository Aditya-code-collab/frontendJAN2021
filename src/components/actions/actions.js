import { ADD_USER } from "./actionType";

import * as api from "../api";

export const addUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.addUser(userData);
    console.log(data);
    dispatch({ type: ADD_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
