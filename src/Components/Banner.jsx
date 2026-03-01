import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";
import Spinner from "./Spinner";
import fetchbannerMovies from "../redux/MiddelWare/bannerMiddelWare";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndexNext, setCurrentIndexPrev } from "../redux/bannerSlice";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

/*
   Icons :- used from Lucide-React Liabrary
*/

function Banner() {
  const { top5Movies, err, loader, currentIndex } = useSelector(
    (state) => state.banner,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbannerMovies());
  }, []);

  return (
    <div>
      {err && (
        <div className="text-red-500 text-center text-xl">
          {err.response?.data?.status_message || err.message}
        </div>
      )}

      {loader ? (
        <Spinner />
      ) : (
        <>
          {
            // >&& :- pattern is called short circuit evaluation in js,
            // it is used to check if the left side of the operator is
            // true then only the right side will be executed

            top5Movies.length > 0 && (
              <div className="relative h-[50vh] md:h-[75vh]  bg-cover bg-center">
                <div
                  className="h-full bg-cover bg-center flex items-end transition-all duration-500 ease-in-out"
                  style={{
                    backgroundImage: `url(${top5Movies[currentIndex]?.bannerImage})`,
                  }}
                >
                  <div className="text-white w-full  text-center text-2xl p-4 bg-black/50">
                    {top5Movies[currentIndex]?.title}
                  </div>
                </div>

                <button
                  className="absolute left-2 top-1/2 text-lime-100  p-2 bg-black/70 border rounded-full"
                  onClick={() => dispatch(setCurrentIndexPrev())}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="absolute right-2 top-1/2 text-lime-100 p-2 bg-black/70 border rounded-full"
                  onClick={() => dispatch(setCurrentIndexNext())}
                >
                  <ChevronRight />
                </button>
              </div>
            )
          }
        </>
      )}
    </div>
  );
}

export default Banner;
