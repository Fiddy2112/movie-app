import axios from "axios";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchMovies = async (moviesName) => {
  return axios.get(`${API_ENDPOINT}&s=${moviesName}`);
};
