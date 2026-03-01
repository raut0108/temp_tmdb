import React from 'react'
import { ArrowUp, ArrowDown, Pointer } from "lucide-react";
import genreids from '../Helpers/GenereIDMappings';
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function WatchListTable(Prop) {

    const {handleDecendingSortRatings,handleAscendingSortRatings,removeMovie,search,currGenere,watchList} = Prop;
    
  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead>
              <tr className="bg-gray-400">
                <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  <div className="flex gap-2">
                    <div className="cursor-pointer">
                      <ArrowUp
                        size={24}
                        strokeWidth={2}
                        onClick={handleDecendingSortRatings}
                      />
                    </div>
                    <div>Ratings</div>
                    <div className="cursor-pointer">
                      <ArrowDown
                        size={24}
                        strokeWidth={2}
                        onClick={handleAscendingSortRatings}
                      />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  Popularity
                </th>
                <th className="px-6 py-4 font-medium text-gray-900">Genere</th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  {" "}
                  Action Button
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {watchList.length > 0 &&
                watchList
                  .filter((movie) => {
                    return (
                      currGenere === "All Genre" ||
                      movie?.genre_ids
                        .map((id) => {
                          return genreids[id];
                        })
                        .includes(currGenere)
                    );
                  })
                  .filter((movi) => {
                    return movi?.title
                      .toLowerCase()
                      .trim()
                      .includes(search.toLowerCase());
                  })
                  .map((movi, index) => {
                    return (
                      <tr key={index}>
                        <td className="flex items-center px-6 py-4 font-normaltext-gry-900">
                          <img
                            src={`${IMAGE_BASE_URL}${movi?.poster_path}`}
                            alt="Movie Poster"
                            className="h-[6rem] w-[10rem] object-cover rounded-md"
                          />
                          <div className="font-medium text-gray-700 text-sm pl-2">
                            {" "}
                            {movi?.title}{" "}
                          </div>{" "}
                        </td>
                        <td className="px-14 py-4">{movi?.vote_average}</td>
                        <td className="pl-6 py-4">{movi?.popularity}</td>
                        <td className="pl-6 py-4">
                          {movi.genre_ids.map((id, index) => {
                            const genre = genreids[id];
                            const isActive = currGenere === genre;

                            return (
                              <span
                                key={index}
                                className={
                                  isActive ? "text-blue-600 font-bold" : ""
                                }
                              >
                                {genre}
                                {index < movi.genre_ids.length - 1 && " , "}
                              </span>
                            );
                          })}
                        </td>

                        <td
                          className="pl-6 py-4 text-red-500 cursor-pointer"
                          onClick={() => removeMovie(movi)}
                        >
                          REMOVE
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
  )
}

export default WatchListTable
