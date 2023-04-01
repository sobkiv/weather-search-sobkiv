import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import fetchGeocodingData from '../../services/DataService/fetchGeocodingData';
import fetchWeatherData from '../../services/DataService/fetchWeatherData';

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchGeocodingData(city)
      .then(({ data }) => {
        return fetchWeatherData(data[0].lat, data[0].lon);
      })
      .then(({ data }) => {
        setWeatherData(data);
      });
  }, [city]);

  if (!weatherData) {
    return <CircularProgress />;
  }

  const { name, main, weather } = weatherData;

  return (
    <div>
      <Typography variant="h5">Weather in {name}</Typography>
      <Typography>Temperature: {main.temp}°C</Typography>
      <Typography>Humidity: {main.humidity}%</Typography>
      <Typography>Description: {weather[0].description}</Typography>
    </div>
  );
}

export default WeatherDisplay;
