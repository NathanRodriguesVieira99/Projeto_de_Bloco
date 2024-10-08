import React, { useState, useEffect } from 'react'

import fetchPopularMovies, { IMAGE_BASE_URL } from '../../API/apiServices'

import './PopularMovies styles/_PopularMovies.scss';

function PopularMovies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        console.log('Filmes populares:', popularMovies)
        setMovies(popularMovies);
      } catch (error) {
        console.error('Erro ao buscar filmes populares', error)
      }
    }
    fetchPopular()
  }, [])


  return (
    <div className='odinPopularMovies'>
      <h2 className='popularesNoMomento'>Populares no momento</h2>
      {movies.length > 0 ? (
        <ul className='listaPopularMovies'>
          {movies.map((movie) => (
            <li key={movie.id} className='itensPopularMovies'>
              <img className='popularMoviesImages' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
            </li>
          ))}
        </ul>
      ) : (
        <p> carregando filmes...</p>
      )}
    </div>
  )
}

export default PopularMovies