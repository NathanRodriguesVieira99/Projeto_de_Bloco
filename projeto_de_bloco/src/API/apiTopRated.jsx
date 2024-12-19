import axios from 'axios';
import apiKey from './apiKey';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchTopRatedMovies = async () => {
  try {
    const response = await api.get(`/movie/top_rated`, { params: { api_key: apiKey } });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes mais bem avaliados:', error.message);
    throw error;
  }
};

export default fetchTopRatedMovies;
