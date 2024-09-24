import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MovieType } from "../constants/types";
import { RootState } from ".";
import { apiUrlMovies, moviesApi } from "../constants/api";
import { addFavMovieFS } from "../constants/firestoreApis";

export interface MoviesSlice {
  list: MovieType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const moviesSlice = createSlice({
  name: "fav",
  initialState: <MoviesSlice>{
    list: [],
    status: "idle",
    error: null,
    theme: { dark: false },
  },
  reducers: {
    toggleFav: (state, action: PayloadAction<number>) => {
      state.list = state.list.map((m) =>
        m.id === action.payload ? { ...m, liked: !m.liked } : m
      );
    },
    clearMovies: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<MovieType[]>) => {
          state.status = "succeeded";
          state.list = [
            ...action.payload.filter(
              (m) => !state.list.some((oldM) => oldM.id === m.id)
            ),
            ...state.list,
          ];
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});
interface FetchMoviesArgs {
  sort_by: string;
}
// Async Actions
export const fetchMovies = createAsyncThunk<MovieType[], FetchMoviesArgs>(
  "movies/fetchMovies",
  async ({ sort_by }) => {
    const res = await fetch(moviesApi(sort_by));
    const data = await res.json();
    const movies = data?.results.map((m: MovieType) => ({
      ...m,
      liked: false,
    }));

    return movies;
  }
);
interface AddMovie {
  movie: MovieType;
}

// Selectors
const selectMovies = (state: RootState) => state.movies.list;
export const selectMovieById = createSelector(
  [selectMovies, (state, id) => id],
  (movies, id) => movies.find((m) => m.id === id)
);
export const selectFavMovies = createSelector([selectMovies], (movies) =>
  movies.filter((m) => m.liked)
);

export const { toggleFav, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
