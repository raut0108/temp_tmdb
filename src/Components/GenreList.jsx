import React from 'react'
function GenreList(genreProp) {

    const  {genreList,currGenere , setCurrGenere} = genreProp
  return (
    <div className="flex justify-center m-4">
                {genreList.map((genre, index) => {
                  console.log(currGenere === genre);
                  return (
                    <div
                      key={index}
                      className={`mx-4 flex justify-center items-center h-[3rem] w-[20rem]  border border-black rounded-xl cursor-pointer ${
                        currGenere === genre
                          ? "bg-blue-400 text-white"
                          : "bg-gray-300"
                      }`}
                      onClick={() => {
                        setCurrGenere(genre);
                      }}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
  )
}

export default GenreList
