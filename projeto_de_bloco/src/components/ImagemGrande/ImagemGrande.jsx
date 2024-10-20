import React, { useState, useEffect } from 'react';

import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

import fetchPopularMovies, { BACKDROP_BASE_URL } from '../../API/apiServices';
import TitleImagemGrande from '../TitleImagemGrande/TitleImagemGrande';

import './_ImagemGrande.scss';


function ImagemGrande() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

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

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        if (isImageLoaded) {
          setCurrentMovieIndex((prevIndex) => {
            return prevIndex === movies.length - 1 ? 0 : prevIndex + 1
          })
          setIsImageLoaded(true)
        }
      }, 3000)

      return () => clearInterval(interval)
    }

  }, [movies, isImageLoaded])


  const currentMovie = movies.length > 0 && currentMovieIndex < movies.length ?
    movies[currentMovieIndex]
    : null;


  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <div className='OdinGrande' id='OdinGrande'>
      {currentMovie ? (
        <>
          <img
            src={`${BACKDROP_BASE_URL}${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            key={currentMovie.id}
            onLoad={handleImageLoad}
            className='BackdropImage'
         />
          <TitleImagemGrande currentMovie={currentMovie} />
          <div className="conteudos">
            <div className="btns">
              <button className='list'>
                <FaPlus /> Lista
              </button>
              <button className='play'>
                <FaPlay className='iconePlay' /> Play
              </button>
              <button className="moreInfo">
                <IoMdInformationCircleOutline /> Info
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default ImagemGrande;
