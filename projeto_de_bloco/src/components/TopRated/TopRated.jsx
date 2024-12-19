import React, { useState, useEffect } from 'react';

import fetchTopRatedMovies from '../../API/apiTopRated';
import { IMAGE_BASE_URL } from '../../API/apiServices';

import './TopRated styles/TopRated.scss';

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAllTopRatedMovies = async () => {
      try {
        const moviesList = await fetchTopRatedMovies();
        console.log('Filmes mais bem avaliados:', moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.error('Erro ao buscar filmes mais bem avaliados', error);
      }
    };
    fetchAllTopRatedMovies();
  }, []);

  return (
    <div className='odinTopRated'>
      <h2 className='topRatedNoMomento'>Filmes Mais Bem Avaliados</h2>
      {movies.length > 0 ? (
        <ul className='listaTopRated'>
          {movies.map((movie) => (
            <li key={movie.id} className='itensTopRated'>
              <img
                className='topRatedImages'
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

export default TopRated;
