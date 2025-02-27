import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchUpcomingMovies = async () => {
  try {
    const response = await api.get(`/movie/upcoming`, { params: { api_key: apiKey } });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes em lançamento:', error.message);
    throw error;
  }
};

export default fetchUpcomingMovies;
