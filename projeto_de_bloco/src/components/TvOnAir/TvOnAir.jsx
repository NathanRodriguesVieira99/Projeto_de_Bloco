import React, { useState, useEffect } from 'react';
import fetchTvOnAir from '../../API/apiTvOnAir';
import { IMAGE_BASE_URL } from '../../API/apiServices';

import './TvOnAir styles/TvOnAir.scss';

function TvOnAir() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchAllTvShows = async () => {
      try {
        const tvShowsList = await fetchTvOnAir(); 
        console.log('Séries no ar:', tvShowsList);
        setTvShows(tvShowsList);
      } catch (error) {
        console.error('Erro ao buscar séries no ar', error);
      }
    };
    fetchAllTvShows();
  }, []);

  return (
    <div className='odinTvOnAir'>
      <h2 className='tvOnAirTitle'>Séries no Ar</h2>
      {tvShows.length > 0 ? (
        <ul className='tvOnAirList'>
          {tvShows.map((show) => (
            <li key={show.id} className='tvOnAirItem'>
              <img
                className='tvOnAirImage'
                src={`${IMAGE_BASE_URL}${show.poster_path}`}
                alt={show.name} 
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando séries no ar...</p>
      )}
    </div>
  );
}

export default TvOnAir;
