import React from 'react'
import { IMG_LINK } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieOverview, addPosterPathOverView } from '../utils/MoviesSlice';

const MoviesCard = ({ posterpath, overview, title }) => {

  const dispatch = useDispatch();
  const handleMovieCardEvent = () => {
    dispatch(addMovieOverview());
    dispatch(addPosterPathOverView({ posterPathData: posterpath, overviewData: overview, movieTitle:title }))
  }
  return (
    <div className='w-36'>
      <img src={IMG_LINK + posterpath} onClick={handleMovieCardEvent} alt="movie-card" />
    </div>
  )
}

export default MoviesCard;
