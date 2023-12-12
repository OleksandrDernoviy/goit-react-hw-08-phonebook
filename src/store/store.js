
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};


const persistedReducer = persistReducer(
  persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer, middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  }})

export const persistor = persistStore(store)
