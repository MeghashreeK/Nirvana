import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies=()=>{
    useEffect(()=>{getPopularMoviesData()},[]);
    const dispatch=useDispatch();

    const getPopularMoviesData=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const json=await data.json();
        dispatch(addPopularMovies(json.results));

    }
}
export default usePopularMovies;