import React from 'react'
import { IMG_LINK } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieOverview, addPosterPathOverView } from '../utils/MoviesSlice';
import ShimmerUI from './ShimmerUI';
import { useState, useEffect } from 'react';


const MoviesCard = ({ posterpath, overview, title, id }) => {
  // const [loadData,setLoadData]=useState(true);

  // useEffect(()=>{
  //   setInterval(()=>{setLoadData(false)},4000)
  // },[])

  const dispatch = useDispatch();
  const handleMovieCardEvent = () => {
    dispatch(addMovieOverview());
    dispatch(addPosterPathOverView({ posterPathData: posterpath, overviewData: overview, movieTitle:title, movieId:id }))
  }
  return (posterpath===null) ? <ShimmerUI/> : (
    <div className='w-36'>
      { <img src={IMG_LINK + posterpath} onClick={handleMovieCardEvent} alt="movie-card" />}
    </div>
  )

}

export default MoviesCard;

