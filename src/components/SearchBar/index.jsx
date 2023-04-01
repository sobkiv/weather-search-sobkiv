import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
    setCity('');
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="city-input"
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={handleChange}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default SearchBar;
