import React, { useEffect } from "react";
import PginationComponent from "./PginationComponent";
import MoviCardComponent from "./MoviCardComponent";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";
import { useSelector,useDispatch } from "react-redux"; 
import fetchTrendingMovies from '../redux/MiddelWare/middelware'
import { handleNext , handlePrevious } from "../redux/paginationSlice"; 


function Movies() {
  
  //State Managemaent Using Redux
  const { movies,err,loader} = useSelector((state)=>state.movie)
  const { pageNo} = useSelector((state)=>state.pagination)

  // Dispatcher  
  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(fetchTrendingMovies(pageNo))
  }, [pageNo ,dispatch]);

 
  // Component
  return (
    <div>
      <ErrorComponent err={err}/>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <MoviCardComponent movies={movies} />
          <PginationComponent
            handlePrev={()=>dispatch(handlePrevious())}
            handleNext={()=>dispatch(handleNext())}
            pageNo={pageNo}
          />
        </div>
      )}
    </div>
  );
}

export default Movies;
