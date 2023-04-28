import { configureStore } from '@reduxjs/toolkit';
import dealersREducer from '../slices/dealers.slice';

const store = configureStore({
  reducer: {
    dealers: dealersREducer,
  },
});

export default store;
