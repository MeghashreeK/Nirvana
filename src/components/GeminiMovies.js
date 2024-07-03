import React, { useEffect, useState } from 'react'
import { API_OPTIONS, IMG_LINK } from '../utils/constants';
import { useDispatch } from 'react-redux';

const GeminiMovies = ({movie}) => {
    const [movieData,setMovieData]=useState([]);

    useEffect(()=>{
      if(movie){
        geminiSuggestedMovies();
      }
    },[movie]);

    const geminiSuggestedMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        // console.log(json.results[0]);
        setMovieData(json.results[0]);
      }

if ((movieData) && !movieData.poster_path) return null;
  return (
    <div className='text-blue-500'>
        <div>
        {(movieData) && <img className='flex w-36 h-56' src={IMG_LINK+movieData.poster_path} alt="movie-img"/>}
        </div>
    </div>
  )
}

export default GeminiMovies

