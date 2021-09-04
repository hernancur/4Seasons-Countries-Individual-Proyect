import {  GET_BY_ID, GET_BY_NAME, GET_ALL } from '../actions/types'; // 

let initialState = {
  countries: [],
  country: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
