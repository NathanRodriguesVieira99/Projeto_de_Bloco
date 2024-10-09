import React, { useState, useEffect } from 'react';
import fetchPopularMovies, { IMAGE_BASE_URL } from '../../API/apiServices';
import './PopularMovies styles/_PopularMovies.scss';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesToShow = 5;

  //gambiarra
  const dimensions = {
    xsmall: { itemWidth: 151, spacing: 2 }, 
    small: { itemWidth: 152.3, spacing: 1 }, 
    large: { itemWidth: 154.5, spacing: 8 }, 
    xlarge: { itemWidth: 201, spacing: 10 }, 
    xxlarge: { itemWidth: 136.5, spacing: 12 }, 
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
      prevIndex < movies.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movies.length - 1
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
              width: `${(movies.length * (itemWidth + spacing))}px`,
            }}
          >
            {movies.map((movie) => (
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
