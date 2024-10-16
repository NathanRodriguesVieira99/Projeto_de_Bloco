import React, { useState, useEffect } from 'react';
import fetchPopularMovies, { IMAGE_BASE_URL } from '../../API/apiServices';
import './PopularMovies styles/_PopularMovies.scss';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesToShow = 10;

  //gambiarra
  const dimensions = {
    xsmall: { itemWidth: 119, spacing: 4.1 },
    small: { itemWidth: 153.3, spacing: 2 },
    medium: { itemWidth: 148, spacing: 4 },
    large: { itemWidth: 104.2, spacing: 8 },
    xlarge: { itemWidth: 200, spacing: 10 },
    xxlarge: { itemWidth: 28, spacing: 1 },
  };

  const getDimensions = () => {
    if (window.innerWidth >= 1200) {
      return dimensions.xxlarge;
    } else if (window.innerWidth >= 992) {
      return dimensions.xlarge;
    } else if (window.innerWidth >= 768) {
      return dimensions.large;
    } else if (window.innerWidth >= 576) {
      return dimensions.medium;
    } else if (window.innerWidth >= 480) {
      return dimensions.small;
    } else {
      return dimensions.xsmall;
    }
  };
  //gambiarra

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Erro ao buscar filmes populares', error);
      }
    };

    fetchPopular();
  }, []);


  const nextMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movies.length - moviesToShow ? prevIndex + 1 : 0
    );
  };


  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movies.length - moviesToShow
    );
  };


  const { itemWidth, spacing } = getDimensions();

  return (
    <div className='odinPopularMovies'>
      <h2 className='popularesNoMomento'>Populares no momento</h2>
      {movies.length > 0 ? (
        <div className="movies-container">
          <button className="carousel-button prev" onClick={prevMovie}>❮</button>
          <ul
            className='listaPopularMovies'
            style={{
              transform: `translateX(-${currentIndex * (itemWidth + spacing)}px)`,
              transition: 'transform 0.3s ease',
              display: 'flex',

              width: `${moviesToShow * (itemWidth + spacing)}px`,
            }}
          >
            {movies.slice(currentIndex, currentIndex + moviesToShow).map((movie) => (
              <li key={movie.id} className='itensPopularMovies'>
                <img
                  className='popularMoviesImages'
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
          </ul>

          <button className="carousel-button next" onClick={nextMovie}>❯</button>

        </div>

      ) : (
        <p>Carregando filmes...</p>
      )}
    </div>
  );
}

export default PopularMovies;
