import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/TMDB";
import { genreOrCategory } from "../features/currentGenorCat";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenorCat: genreOrCategory,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
