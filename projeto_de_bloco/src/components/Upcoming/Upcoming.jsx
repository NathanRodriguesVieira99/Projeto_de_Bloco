import React, { useState, useEffect } from 'react';
import fetchUpcomingMovies from '../../API/apiUpcoming';
import { IMAGE_BASE_URL } from '../../API/apiServices';

import './Upcoming styles/Upcoming.scss';

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAllUpcomingMovies = async () => {
      try {
        const moviesList = await fetchUpcomingMovies(); 
        console.log('Filmes em lançamento:', moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.error('Erro ao buscar filmes em lançamento', error);
      }
    };
    fetchAllUpcomingMovies();
  }, []);

  return (
    <div className='odinUpcoming'>
      <h2 className='moviesNoMomento'>Filmes em Lançamento</h2>
      {movies.length > 0 ? (
        <ul className='listaMovies'>
          {movies.map((movie) => (
            <li key={movie.id} className='itensMovies'>
              <img
                className='movieImages'
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title} 
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando filmes...</p>
      )}
    </div>
  );
}

export default UpcomingMovies;
