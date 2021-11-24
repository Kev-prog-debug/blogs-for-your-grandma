import axios from "axios";
import { actionTypes } from "./index";
export const fetchNews = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.fetchRequest });
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=${query}&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
      );
      const news = response.data.articles;
      dispatch({ type: actionTypes.fetchSuccess, payload: news });
    } catch (err) {
      console.error(err);
      dispatch({ type: actionTypes.fetchError });
    }
  };
};
export const fetchArticles = (title) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.fetchRequest });
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=${title}&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
      );
      const articles = response.data.articles;
      dispatch({ type: actionTypes.fetchSuccess, payload: articles });
    } catch (err) {
      console.error(err.message);
      dispatch({ type: actionTypes.fetchError });
    }
  };
};
export const fetchBreakingNews = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.fetchRequest });
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
      );
      const news = response.data.articles;
      dispatch({ type: actionTypes.fetchBreakingNews, payload: news });
    } catch (err) {
      console.error(err);
      dispatch({ type: actionTypes.fetchError, payload: err.message });
    }
  };
};
export const fetchWeatherInfo = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.fetchRequest });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=yangon&appid=d896edbae39a61362c68bc4466dd9453&units=metric`
      );
      const weather = response.data;
      console.log(weather);
      dispatch({
        type: actionTypes.fetchWeatherInfo,
        payload: weather,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: actionTypes.fetchError, payload: err.message });
    }
  };
};
