import React, { useEffect, useState } from 'react';

const ShowDetails = ({ showId }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchData();
  }, [showId]);

  async function fetchData() {
    try {
      const response = await fetch(`https://www.episodate.com/api/show-details?q=${showId}`);
      const data = await response.json();
      setShow(data.tvShow);
    } catch (error) {
      // Manejo de errores
    }
  }

  if (!show) {
    return <div>Cargando detalles del show...</div>;
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <img src={show.image_path} alt={show.name} />
      <p>{show.description}</p>
      <p>Rating: {show.rating}</p>
      <p>Géneros: {show.genres.join(', ')}</p>
      <p>Fecha de estreno: {show.start_date}</p>
      {/* Agrega más detalles que desees mostrar */}
    </div>
  );
};

export default ShowDetails;