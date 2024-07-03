import React from 'react'
import { IMG_LINK } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieOverview, addPosterPathOverView } from '../utils/MoviesSlice';
import ShimmerUI from './ShimmerUI';
import { useState, useEffect } from 'react';


const MoviesCard = ({ posterpath, overview, title, id }) => {

  const dispatch = useDispatch();
  const handleMovieCardEvent = () => {
    dispatch(addMovieOverview());
    dispatch(addPosterPathOverView({ posterPathData: posterpath, overviewData: overview, movieTitle:title, movieId:id }))
  }
  return (
    <div className='w-36'>
      { posterpath && <img src={IMG_LINK + posterpath} onClick={handleMovieCardEvent} alt="movie-card" />}
    </div>
  )

}

export default MoviesCard;

