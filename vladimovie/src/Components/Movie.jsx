


import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';

const PopularMovies = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    filterMovies();
  }, [movies, searchValue]);

  async function fetchData() {
    try {
      const response = await fetch(`https://www.episodate.com/api/most-popular?page=${currentPage}`);
      const data = await response.json();
      setMovies(data.tv_shows);
    } catch (error) {
      // Manejo de errores
    }
  }

  function filterMovies() {
    if (searchValue) {
      const filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }

  const handleShowClick = (showId) => {
    setSelectedShowId(showId);
  };

  const handleClearShow = () => {
    setSelectedShowId(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="movie-gallery">
      <h1>Películas</h1>
      {selectedShowId ? (
        <>
          <button onClick={handleClearShow}>Volver a la lista</button>
          <ShowDetails showId={selectedShowId} />
        </>
      ) : (
        <ul className="movie-list">
          {filteredMovies.map((movie) => (
            <li key={movie.id} className="movie-item" onClick={() => handleShowClick(movie.id)}>
              <img src={movie.image_thumbnail_path} alt={movie.name} />
              {movie.name}
            </li>
          ))}
        </ul>
        
      )}
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default PopularMovies;




