

import React, { useState } from 'react';

const SearchMovie = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className='form-busqueda' onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder='Buscar' />
      <button type="submit">Buscar</button>
      <button type="button">Limpiar</button>
    </form>
  );
};

export default SearchMovie;