import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import settingsSlice from "./settingsSlice";
import userSlice from "./userSlice";
// ... add local storage congih
// save reducer slice to storage
const moviesPersistConfig = {
  key: "movies",
  storage: AsyncStorage,
};

const settingsPersistConfig = {
  key: "settings",
  storage: AsyncStorage,
};
const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
};
const persistedMovies = persistReducer(moviesPersistConfig, moviesSlice);
const persistedSettings = persistReducer(settingsPersistConfig, settingsSlice);
const persistedUser = persistReducer(userPersistConfig, userSlice);

export const store = configureStore({
  reducer: {
    movies: persistedMovies,
    settings: persistedSettings,
    user: persistedUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// Types

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
