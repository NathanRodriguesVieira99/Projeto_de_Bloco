import axios from 'axios';
import apiKey from './apiKey';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchTvOnAir = async () => {
  try {
    const response = await api.get(`/tv/top_rated`, { params: { api_key: apiKey } });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar séries no ar:', error.message);
    throw error;
  }
};

export default fetchTvOnAir;
