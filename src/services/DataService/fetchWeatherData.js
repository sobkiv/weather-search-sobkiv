import axios from 'axios';

const WEATHER_API_KEY = 'a1a4fc28442dc5851da9084066361d53';

async function fetchWeatherData(lat, lon) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  return await axios.get(URL);
}

export default fetchWeatherData;
