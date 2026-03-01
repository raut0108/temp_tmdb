import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const watchListContext = createContext()



function MovieContextWrapper({children}) {

  const [watchList, setWatchList] = useState(() => {
    const storedWatchList = localStorage.getItem('TMDB_WatchList_Movies');
    return storedWatchList ? JSON.parse(storedWatchList) : [];
  })
  
  useEffect(()=>{
      localStorage.setItem('TMDB_WatchList_Movies',JSON.stringify(watchList))
    },[watchList])
    
 const isInWatchList = (movi)=>{
      return (watchList.find(mvi=>mvi.id==movi.id))
     }
     
 const addToWatchList = (movi) => {
   setWatchList((previousWatchList)=>{
       const updatedWatchList = [...previousWatchList , movi];
       return updatedWatchList 
    })
  }

  const removeFromWatchList = (movi) => {
     setWatchList((previouseWatchList)=>{
        const filteredWatchList = previouseWatchList.filter((mvi)=>mvi.id !== movi.id);
        return filteredWatchList
     })
  }
  

  return (
     <watchListContext.Provider
     value={{isInWatchList,addToWatchList,removeFromWatchList,setWatchList , watchList}}
     >{children}</  watchListContext.Provider>
  )
}

export default MovieContextWrapper
