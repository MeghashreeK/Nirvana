import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies} from "../utils/MoviesSlice";

const useTopRatedMovies=()=>{
    useEffect(()=>{getTopRatedMoviesData()},[]);
    const dispatch=useDispatch();

    const getTopRatedMoviesData=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));

    }
}
export default useTopRatedMovies;