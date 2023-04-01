import axios from 'axios';

const WEATHER_API_KEY = 'a1a4fc28442dc5851da9084066361d53';

async function fetchGeocodingData(city) {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`;
  return await axios.get(URL);
}

export default fetchGeocodingData;
