import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as shopFavorite} from './shop/shop.slice'
const redusers = combineReducers(
  {shopFavorite: shopFavorite}
);

export const store = configureStore({
  reducer: redusers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
