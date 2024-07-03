import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS_FOR_YOUTUBE } from '../utils/constants';
import { toggleHeaderList } from '../utils/HeaderListSlice';

const VideosPlayed = () => {
  const id = useSelector((store) => store.addMovie.posterPathOverView);
  const [movieKey, setMovieKey] = useState([]);
  const dispatch=useDispatch();


  useEffect(() => {
    if (id) {
      getVideoData();
      console.log(id.movieId);
    }
  }, [id])



  const getVideoData = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id.movieId}/videos`, API_OPTIONS_FOR_YOUTUBE);
    const json = await data.json();
    console.log(json.results);
    const result = json.results;
    if (result) {
      const filteredData = result.filter((movie) => movie.name.includes("Trailer"));
      if (filteredData) {
        setMovieKey(filteredData[filteredData.length - 1].key);
      }
      else {
        setMovieKey(result[0].key);
      }
    }
  }
console.log(movieKey);
  return (
    <div className='w-full h-screen'>
      {movieKey && <iframe className='w-full h-screen' src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
    </div>
  )
}

export default VideosPlayed;