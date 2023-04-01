import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (city) => {
    setCity(city);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <SearchBar onSubmit={handleCityChange} />
        {city && <WeatherDisplay city={city} />}
      </Grid>
    </Grid>
  );
}

export default App;
