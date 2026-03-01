import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './todoSlice'
import moviSlice from './moviSlice'
import paginationSlice from './paginationSlice'
import bannerSlice from './bannerSlice'

const store = configureStore({
    reducer:{
        counter    : counterReducer,
        todo       : todoReducer,
        movie      : moviSlice, 
        pagination : paginationSlice,
        banner     : bannerSlice
    }
})

export default store; 