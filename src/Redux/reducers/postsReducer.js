import { actionTypes } from "../actions";
const initialState = {
  posts: [],
  breakingNews: [],
  weatherInfo: null,
  loading: true,
  error: null,
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchRequest:
      return {
        ...state,
        posts: [],
        loading: true,
        error: null,
      };
    case actionTypes.fetchSuccess:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.fetchError:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.fetchBreakingNews:
      return {
        ...state,
        breakingNews: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.fetchWeatherInfo:
      return {
        ...state,
        weatherInfo: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default postsReducer;
