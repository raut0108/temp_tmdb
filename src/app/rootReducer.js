import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/redux/moviesSlice';
import paginationReducer from '../features/movies/redux/paginationSlice';
import bannerReducer from '../features/banner/redux/bannerSlice';
import watchlistReducer from '../features/watchlist/redux/watchlistSlice';

const rootReducer = combineReducers({
  movie        : moviesReducer,
  pagination   : paginationReducer,
  banner       : bannerReducer,
  watchlist    : watchlistReducer,
});

export default rootReducer;
