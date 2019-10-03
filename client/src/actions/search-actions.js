import {
  STATE_SEARCH,
  NAME_SEARCH,
  TOGGLE_TYPE_SEARCH,
  NAME_SEARCH_SUBMIT
  // STATE_SEARCH_SUBMIT,
  // TYPE_SEARCH_SUBMIT
} from "./types";
import axios from "axios";

export const nameSearch = () => {
  return {
    type: NAME_SEARCH
  };
};

export const stateSearch = () => {
  return {
    type: STATE_SEARCH
  };
};

export const typeSearch = () => {
  return {
    type: TOGGLE_TYPE_SEARCH
  };
};

// need to add error actions
export const nameSearchSubmit = (event, query) => async dispatch => {
  event.preventDefault();
  // if (query === "") return;
  console.log("clicked");

  // history.push(`/search=${query}`);

  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries?by_name=${query}`
    );
    console.log(response.data);

    dispatch({
      type: NAME_SEARCH_SUBMIT,
      payload: response.data
    });
  } catch (err) {
    console.log(err);
  }
};
