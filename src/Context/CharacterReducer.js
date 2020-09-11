import { CHARACTERS, PARAMETERS, PAGES, ACTUAL_PAGES } from "./types";

export default (state, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case PARAMETERS:
      return {
        ...state,
        parameters: action.payload,
      };
    case PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case ACTUAL_PAGES:
      return {
        ...state,
        actualPage: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
