import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchPopularSeries = async () => {
  try {
    const response = await api.get(`/tv/popular`, { params: { api_key: apiKey } });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar séries populares:', error.message);
    throw error;
  }
};

export default fetchPopularSeries;
