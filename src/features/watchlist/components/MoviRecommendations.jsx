import React, { useEffect, useState } from "react";
import { getMovieRecommendations } from "../../../utils/Helpers/Gemini";
import Spinner from "../../ui/components/Spinner";
import ErrorFallback from "../../ui/components/ErrorFallback";
function MoviRecommendations({ watchList, setShowModal }) {
  const [recommendations, setRecommendation] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (watchList.length <= 2) {
        return;
      }

      try {
        setLoader(true);
        const result = await getMovieRecommendations(watchList);
        setRecommendation(result?.recommendations);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : err ? (
        <ErrorFallback err={err} />
      ) : (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/50 flex justify-center items-center h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto relative">
            <h2 className="text-2xl font-bold mb-4">Recommended movies based on your watchList</h2>
            {loader ? (
              <div className="flex justify-center items-center py-8">
                <Spinner />
                <span className="ml-2">
                  Getting your personalized recommendations...
                </span>
                <button
                  className="absolute top-4 right-4 text-red-500 text-lg"
                  onClick={() => setShowModal((prevState) => !prevState)}
                >
                  ✖
                </button>
              </div>
            ) : (
              <>
                <button
                  className="absolute top-4 right-4 text-red-500 text-lg"
                  onClick={() => setShowModal((prevState) => !prevState)}
                >
                  ✖
                </button>
                {watchList?.length <= 2 ? (
                  <div className="p-4 text-center">
                    <p className="text-gray-600">
                      Add at least 2 movies to your watchList to get
                      personalized recommendations
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {recommendations?.map((movie, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold">
                            {movie.title}
                          </h3>
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {movie.confidence}% Match
                          </span>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          {movie.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviRecommendations;
