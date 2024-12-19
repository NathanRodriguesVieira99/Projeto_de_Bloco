import React, { useState, useEffect } from 'react';
import fetchNowPlayingMovies from '../../API/apiNowPlaying';
import { IMAGE_BASE_URL } from '../../API/apiServices';

import './NowPlaying styles/NowPlaying.scss';

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const moviesList = await fetchNowPlayingMovies();
        console.log('Filmes em Cartaz:', moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.error('Erro ao buscar filmes em cartaz', error);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div className='odinNowPlaying'>
      <h2 className='nowPlayingNoMomento'>Filmes em Cartaz</h2>
      {movies.length > 0 ? (
        <ul className='listaNowPlaying'>
          {movies.map((movie) => (
            <li key={movie.id} className='itensNowPlaying'>
              <img
                className='nowPlayingImages'
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando filmes em cartaz...</p>
      )}
    </div>
  );
}

export default NowPlaying;
