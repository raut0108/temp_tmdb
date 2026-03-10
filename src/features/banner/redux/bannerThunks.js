import { setErr , setLoader , setTop5Movies , stopLoaderB } from './bannerSlice';
import axios from "axios";

function fetchbannerMovies(){
  const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return async (dispatch) => {
      //const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
        const url = "/.netlify/functions/movies";
      dispatch(setLoader());
      try {
        const response = await axios.get(url);
        let results = response?.data?.results || [];
        // if serverless endpoint failed or returned nothing, fall back to client-side fetch
        if (results.length === 0) {
          const direct = await axios.get(
            `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
          );
          results = direct?.data?.results || [];
        }

        const top5movie = results.slice(0, 5);
        dispatch(
          setTop5Movies(
            top5movie.map((movie) => {
              let cleaned_Title = movie?.title.replace(/“|”/g, '');
              return {
                title: cleaned_Title,
                bannerImage: `${IMAGE_BASE_URL}${movie?.backdrop_path}`,
              };
            }),
          ),
        );
      } catch (error) {
        dispatch(setErr(error));
      } finally {
        dispatch(stopLoaderB());
      }
  }
}


export default fetchbannerMovies;
