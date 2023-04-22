import axios from 'axios';

const BASE_URL = 'https://642f9845c26d69edc87f8191.mockapi.io';

export const fetcUsers = async () => {
  const responce = await axios.get(`${BASE_URL}/tweets`);
  console.log(responce.data);
  return responce.data;
};

export const addUser = async values => {
  const responce = await axios.post(`${BASE_URL}/tweets`, values);
  return responce.data;
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// const API_KEY = '992e567e43c913ea6cedbae9c8870c1e';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/day`;
// const SEARCH_URL = `${BASE_URL}/search/movie`;
// const MOVIE_URL = `${BASE_URL}/movie`;

// const fetchTrendsFilms = async () => {
//   const responce = await axios.get(`${TREND_URL}?api_key=${API_KEY}`);
//   return responce.data;
// };

// const featchSearchFilm = async query => {
//   const responce = await axios.get(
//     `${SEARCH_URL}?api_key=${API_KEY}&query=${query}`
//   );
//   return responce.data;
// };

// const featchMovieDetailsById = async movieId => {
//   const responce = await axios.get(
//     `${MOVIE_URL}/${movieId}?api_key=${API_KEY}`
//   );
//   return responce.data;
// };

// const featchMovieCredits = async id => {
//   const responce = await axios.get(
//     `${MOVIE_URL}/${id}/credits?api_key=${API_KEY}`
//   );
//   return responce.data;
// };

// const featchMovieReviews = async id => {
//   const responce = await axios.get(
//     `${MOVIE_URL}/${id}/reviews?api_key=${API_KEY}`
//   );
//   return responce.data;
// };

// export {
//   fetchTrendsFilms,
//   featchSearchFilm,
//   featchMovieDetailsById,
//   featchMovieCredits,
//   featchMovieReviews,
// };
