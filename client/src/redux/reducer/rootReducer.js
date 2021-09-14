import {
  GET_BY_ID,
  GET_BY_NAME,
  GET_ALL,
  ORDER,
  POPULATION,
  FILTER,
  GET_ALL_ACT,
  GET_ACT_COUNT,
} from '../actions/types';
import { actFilter } from '../../utils/variables';

let initialState = {
  countries: [],
  country: [],
  filteredCountries: [],
  filteredAct: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
        country: [],
      };
    case GET_ALL_ACT:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_BY_NAME:
      if (action.payload.error)
        return alert(`${action.payload.search} is not a country`);
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case ORDER:
      if (action.payload === 'Default') {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      } else if (action.payload && action.payload === 'UP') {
        let copy = state.filteredCountries;
        return {
          ...state,
          filteredCountries: copy
            ?.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
            .slice(),
        };
      } else if (action.payload && action.payload === 'DOWN') {
        let copy = state.filteredCountries;
        return {
          ...state,
          filteredCountries: copy
            ?.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            })
            .slice(),
        };
      } else {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      }
    case POPULATION:
      if (action.payload === 'UP-P') {
        let copy = state.filteredCountries;
        return {
          ...state,
          filteredCountries: copy
            .sort((a, b) => {
              if (Number(a.population) > Number(b.population)) return 1;
              if (Number(a.population) < Number(b.population)) return -1;
              return 0;
            })
            .slice(),
        };
      } else if (action.payload === 'DOWN-P') {
        let copy = state.filteredCountries;
        return {
          ...state,
          filteredCountries: copy
            .sort((a, b) => {
              if (Number(a.population) < Number(b.population)) return 1;
              if (Number(a.population) > Number(b.population)) return -1;
              return 0;
            })
            .slice(),
        };
      } else {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      }
    case FILTER:
      if (action.payload === 'Default') {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      } else if (action.payload && action.payload !== 'Default') {
        let copy = state.countries;
        return {
          ...state,
          filteredCountries: copy
            ?.filter((country) => country.continent === action.payload)
            .slice(),
        };
      } else {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      }
    case GET_ACT_COUNT:
      if (action.payload === 'Default') {
        return {
          ...state,
          filteredCountries: state.countries,
        };
      } else {
        let copy = state.countries;
        return {
          ...state,
          filteredCountries: copy
            .filter((item) => item.Activities.length > 0)
            .filter((el) => actFilter(el.Activities, action.payload)),
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
