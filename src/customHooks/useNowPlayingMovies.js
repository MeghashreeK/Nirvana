import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/MoviesSlice';
import { useEffect } from 'react';


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      getNowPlayingMoviesData();
    },[]);
    
    const getNowPlayingMoviesData=async()=>{
      const data= await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
      const json=await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;