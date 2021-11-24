import { useEffect, useState } from "react";
import { Container } from "./styles/weatherInfo.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherInfo } from "../Redux/actions/fetchPosts";
const Weather = () => {
  // const [weatherData, setWeatherData] = useState(null);
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherInfo);
  useEffect(() => {
    dispatch(fetchWeatherInfo());
  }, []);

  return (
    <Container>
      {weatherData && (
        <>
          <h5>{weatherData.name}</h5>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>{Math.round(weatherData.main.temp)} ℃</p>
        </>
      )}
    </Container>
  );
};
export default Weather;
