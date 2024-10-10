import React, { useState, useEffect } from 'react';

import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

import fetchPopularMovies, { BACKDROP_BASE_URL } from '../../API/apiServices';
import './_ImagemGrande.scss';


function ImagemGrande() {
  const [movies, setMovies] = useState([]);

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

  const firstMovie = movies.length > 0 ? movies[0] : null;

  return (
    <div className='OdinGrande'>
      {firstMovie ? (
        <>
          <img
            src={`${BACKDROP_BASE_URL}${firstMovie.backdrop_path}`}
            alt={firstMovie.title}
            key={firstMovie.id}
            className='BackdropImage'
          />
          <div className="conteudos">
            <div className="btns">
              <button className='list'>
                <FaPlus /> Lista
              </button>
              <button className='play'>
                <FaPlay className='iconePlay' /> play
              </button>
              <button className="moreInfo">
                <IoMdInformationCircleOutline /> Info
              </button>
            </div>

            {/* telas maiores */}
            <div className="conteudosTelaGrande">
              <h1 className='titulo'>{firstMovie.title}</h1>
              <p className='desc'>{firstMovie.overview}</p>
            </div>
            {/* telas maiores */}
          </div>
        </>
      ) : (
        <p>Carregando imagem...</p>
      )}
    </div>
  );
}

export default ImagemGrande;
