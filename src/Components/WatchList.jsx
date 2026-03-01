import React, { useContext, useEffect, useState } from "react";
import genreids from "../Helpers/GenereIDMappings";
import MoviRecommendations from "./MoviRecommendations";
import GenreList from "./GenreList";
import SearchWatchListMovies from "./SearchWatchListMovies";
import WatchListTable from "./WatchListTable";
import NoMmoviesInWatchList from "./NoMmoviesInWatchList";
import { watchListContext } from "../Context/MovieContextWrapper";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function WatchList() {
  
  
  //All the States
  const [currGenere, setCurrGenere] = useState("All Genre");
  const [genreList, setGenereList] = useState(["All Genre"]);
  const [search, setSearch] = useState("");
  const [showModel, setShowModel] = useState(false);
  const watchListData = useContext(watchListContext)
 
  // All the useEffects/SideEffects
  useEffect(() => {
      const genreListData = watchListData.watchList.reduce((set, movie) => {
      movie?.genre_ids.forEach((id) => set.add(genreids[id]));
      return set;
    }, new Set());

     
    setGenereList(["All Genre", ...genreListData]);
    console.log(genreListData);
  }, []);

  //Sorting Ascending
  const handleAscendingSortRatings = () => {
    const sortedMovies = watchListData.watchList.sort(
      (A, B) => A?.vote_average - B?.vote_average,
    );
    watchListData.setWatchList([...sortedMovies]);
  };

  //Sorting Descending
  const handleDecendingSortRatings = () => {
    const sortedMovies = watchListData.watchList.sort(
      (A, B) => B?.vote_average - A?.vote_average,
    );
    watchListData.setWatchList([...sortedMovies]);
  };

  

  
  return (
    <>
      {watchListData.watchList.length > 0 ? (
        <div className="mx-5 my-10">
          <button
            className="flex justify-center items-center bg-blue-400 hover:bg-blue-500 transition duration-300 h-[3rem] w-[14rem] text-white font-bold border border-blue-700 rounded-xl shadow-md cursor-pointer mx-[43%] my-4"
            onClick={() => setShowModel((prevState) => !prevState)}
          >
            Recommed Movies
          </button>
          {showModel && (
            <MoviRecommendations
              watchList={watchListData.watchList}
              setShowModal={setShowModel}
            />
          )}
          <GenreList
            genreList={genreList}
            currGenere={currGenere}
            setCurrGenere={setCurrGenere}
          />
          <SearchWatchListMovies setSearch={setSearch} />
          <WatchListTable
            currGenere={currGenere}
            watchList={watchListData.watchList}
            handleAscendingSortRatings={handleAscendingSortRatings}
            handleDecendingSortRatings={handleDecendingSortRatings}
            search={search}
            removeMovie={watchListData.removeFromWatchList}
          />
        </div>
      ) : (
        <NoMmoviesInWatchList />
      )}
    </>
  );
}

export default WatchList;
