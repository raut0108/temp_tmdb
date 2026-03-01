
import { createSlice } from "@reduxjs/toolkit";

const moviSlice = createSlice({
  
   name:'movie',
   initialState:{
       movies : [],
       err    : null,
       loader : false
   },
   reducers:{
      
       setLoader(state)
       {
         state.err = null;
         state.loader = false;
       } 
       ,
       setErr(state , action)
       {
         state.loader = false;
         state.err = action.payload;
       }
       ,
       setMovies(state , action)
       {
        state.err = null;
        state.loader = false;
        state.movies = action.payload;
       }
       ,
       stopLoader(state)
       {
          state.loader = false;
          state.err = null;  
       }

   } 
         
})


export  const {setErr,setLoader,setMovies,stopLoader } = moviSlice.actions
export default moviSlice.reducer;