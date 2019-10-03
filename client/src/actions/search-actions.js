import { STATE_SEARCH, NAME_SEARCH, TOGGLE_TYPE_SEARCH } from "./types";

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
