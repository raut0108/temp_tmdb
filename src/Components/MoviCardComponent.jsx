import React, { useState,useContext } from "react";
import OpenModalComponent from "./OpenModalComponent";
import {watchListContext} from '../Context/MovieContextWrapper' 
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function MoviCardComponent(props) {

  
  const { movies } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ContextData = useContext(watchListContext) 
  
  const handleOpenMadal = (movi)=>{
    setOpenModal(true);
      setSelectedMovie(movi);
   }

   const handleCloseModal = ()=>{
     setOpenModal(false);
     setSelectedMovie(null); 
  }
  
  return (
    <>
    <div className="flex flex-wrap justify-center gap-10">
    {
      movies.map((movi, index) => {
        return (
          <div key={index} className="hover:scale-110 duration-300 hover:cursor-pointer">
            <div className="h-[30vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col items-center" 
            style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movi?.poster_path})` }}>
              {
                 ContextData.isInWatchList(movi) ?
                 (
                   <div className="flex m-4 h-8 w-8 justify-center items-center rounded-xl bg-gray-900/80" onClick={()=>ContextData.removeFromWatchList(movi)}>&#10060;</div>  
                 )
                  :
                 (
                   <div className="flex m-4 h-8 w-8 justify-center items-center rounded-xl bg-gray-900/80" onClick={()=>ContextData.addToWatchList(movi)}>&#128525;</div>
                 )
              }
              
            </div>
            <div className="mt-3 w-[200PX] text-white text-center text-sm p-2 rounded-lg bg-black/70 font-bold" onClick={()=>handleOpenMadal(movi)}>{movi.title}</div>
          </div>
        );
      })
    }
    </div>
    {
        openModal && 
        <div className='fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center'>
           <OpenModalComponent movie={selectedMovie}  handleCloseModal={handleCloseModal} />
        </div>
    }
    </>

  );
}

export default MoviCardComponent;
