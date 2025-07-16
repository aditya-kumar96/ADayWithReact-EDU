import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { albumApi, useFetchAlbumsQuery } from './api/albumApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath] : albumApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware()
    .concat(albumApi.middleware)
  }
});

setupListeners(store.dispatch)
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';

export {useFetchAlbumsQuery} from './api/albumApi'
