import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PopularMovies from './Components/Movie'
import SearchMovie from './Components/Search'
import './Movie.css'
import ShowDetails from './Components/ShowDetails'

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <SearchMovie onSearch={handleSearch} />
      <PopularMovies searchValue={searchValue} />
    </div>
  );
};

export default App;
