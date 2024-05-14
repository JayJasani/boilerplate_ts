import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import authSlice from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducers = combineReducers({
  auth: authSlice,
});

export default persistReducer(persistConfig, rootReducers);
