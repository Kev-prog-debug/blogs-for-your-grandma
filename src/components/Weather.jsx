import { useEffect, useState } from "react";
import { Container } from "./styles/weatherInfo.styled";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    fetchWeather();
  }, []);
  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=yangon&appid=d896edbae39a61362c68bc4466dd9453&units=metric`
    );
    const data = await response.json();
    // console.log("data", data);
    setWeatherData(data);
  };
  return (
    <>
      {weatherData && (
        <Container>
          <h5>{weatherData.name}</h5>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>{Math.round(weatherData.main.temp)} ℃</p>
        </Container>
      )}
    </>
  );
};
export default Weather;
