import { createSlice } from "@reduxjs/toolkit";
//import { stopLoader } from "./moviSlice";

const bannerSlice = createSlice({

     name:'banner',
     initialState:{
        top5Movies : [],
        err  : null,
        loader : false,
        currentIndex:0,
     },
     reducers:{
         
        setLoader(state)
        {
            state.loader = true;
            state.err = null;
        }
        ,
        setErr(state,action)
        {
            state.err = action.payload;
            state.loader = false;
        }
        ,
        setTop5Movies(state,action)
        {
            state.top5Movies = action.payload;
            state.loader=false;
            state.err = null; 
        }
        ,
        setCurrentIndexPrev(state)
        {
            state.currentIndex = state.currentIndex==0 ? state.top5Movies.length-1 : state.currentIndex-1;
            state.err=null;
        },
        stopLoaderB(state){
            state.loader=false;
            state.err=null;
        },
        setCurrentIndexNext(state)
        {
            state.currentIndex=(state.currentIndex+1)%state.top5Movies.length;
            state.err=null;
        }
    }
})

export const { setCurrentIndex,setErr ,setLoader , setTop5Movies ,stopLoaderB
    ,setCurrentIndexNext,setCurrentIndexPrev
} = bannerSlice.actions;
export default bannerSlice.reducer;