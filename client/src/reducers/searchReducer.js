import {
  STATE_SEARCH,
  NAME_SEARCH,
  TOGGLE_TYPE_SEARCH
} from "../actions/types";

const initialState = {
  showNameSearch: true,
  showStateSearch: false,
  showTypeSearch: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_SEARCH:
      return {
        ...state,
        showNameSearch: true,
        showStateSearch: false,
        showTypeSearch: false
      };

    case STATE_SEARCH:
      return {
        ...state,
        showNameSearch: false,
        showStateSearch: true,
        showTypeSearch: false
      };

    case TOGGLE_TYPE_SEARCH:
      return {
        ...state,
        showNameSearch: false,
        showStateSearch: true,
        showTypeSearch: !state.showTypeSearch
      };

    default:
      return state;
  }
};
