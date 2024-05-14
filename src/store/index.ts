import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slices';
import { NODE_ENV } from '../utils/urls';


export const store = configureStore({
  reducer: rootReducer,
  devTools: NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
