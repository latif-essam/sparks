const apiKey = process.env.apiKey;
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";

const apiUrlMovies = url + path + apiKey;
const apiUrlSeries = url + "discover/tv" + apiKey;
const mapi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const moviesApi = (sort_by: string = "popularity.desc") =>
  `https://api.themoviedb.org/3/discover/movie?sort_by=${sort_by}&api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
export {
  apiKey,
  url,
  imgPath,
  apiUrlSeries,
  apiUrlMovies,
  path,
  mapi,
  moviesApi,
};
