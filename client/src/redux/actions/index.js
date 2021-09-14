import { GET_ALL, GET_BY_NAME, GET_BY_ID, ORDER, POPULATION, FILTER, GET_ALL_ACT, GET_ACT_COUNT} from './types'; // 
import axios from 'axios';
import { URL_API_ALL, URL_ID, URL_QUERY_NAME, URL_ALL_ACTIVITIES } from '../../utils/variables'; //  

export const getAll = () => {
  return async (dispatch) => {
    let response = await axios.get(URL_API_ALL); // localhost:3001/countries
    dispatch({ type: GET_ALL, payload: response.data });
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    let response = await axios.get(URL_ID + id); // localhost:3001/countries/ + id
    dispatch({ type: GET_BY_ID, payload: response.data });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    if(name){
      let response = await axios.get(URL_QUERY_NAME + name); // http://localhost:3001/countries?name= + name
      dispatch({ type: GET_BY_NAME, payload: response.data });
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    let response = await axios.get(URL_ALL_ACTIVITIES)
    dispatch({type: GET_ALL_ACT, payload: response.data})
  }
}

//                          **                    ORDENAMIENTOS                       ** 

export const order = (value)=> {
  return (dispatch) => {
    dispatch({type: ORDER, payload: value})
  }
}

export const population = (value) => {
  return (dispatch) => {
    dispatch({type: POPULATION, payload: value})
  }
}

//                         **                    FILTRADOS                       ** 

export const filter = (value) => {
  return (dispatch) => {
    dispatch({type: FILTER, payload:value})
  }
}

export const actFilter = (value) => {
  return (dispatch) => {
    dispatch({type: GET_ACT_COUNT, payload: value})
  }
}