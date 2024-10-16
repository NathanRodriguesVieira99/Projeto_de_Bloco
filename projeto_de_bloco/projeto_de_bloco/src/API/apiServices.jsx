import axios from 'axios';
import apiKey from './apiKey';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';



// obter os filmes populares 
const fetchPopularMovies = async () => {
  try {
    const response = await api.get(`/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares', error);
    throw error;
  }

};

export default fetchPopularMovies;