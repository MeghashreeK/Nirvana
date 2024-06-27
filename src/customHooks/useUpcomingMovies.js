import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/MoviesSlice";

const useUpcomingMovies=()=>{
    useEffect(()=>{getUpcomingMoviesData()},[]);
    const dispatch=useDispatch();

    const getUpcomingMoviesData=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));

    }
}
export default useUpcomingMovies;