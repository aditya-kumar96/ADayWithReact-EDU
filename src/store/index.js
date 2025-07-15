import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
