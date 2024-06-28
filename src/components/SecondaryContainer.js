import React, { useState } from 'react'
import MoviesList from './MoviesList'
import { useDispatch, useSelector } from 'react-redux';
import { IMG_LINK } from '../utils/constants';

const SecondaryContainer = () => {

  const movie = useSelector((store) => store.addMovie);
  const movieOverviewState = useSelector((store) => store.addMovie.movieOverviewState);
  const movieData = useSelector((store) => store.addMovie.posterPathOverView);
  const [showMovieOverview,setShowMovieOverview]=useState(false);


  const handleClick = () => {
    setShowMovieOverview(!showMovieOverview);
   };

  return (
    movie && (<div className='flex flex-col bg-black pb-5 relative w-screen' onClick={handleClick}>
      <div className='flex flex-col lg:-mt-28 lg:z-20 gap-8'>
        <MoviesList title={"Now Playing Movies"} movie={movie.nowPlayingMoviesList} />
        <MoviesList title={"Top Rated Movies"} movie={movie.topRatedMoviesList} />
        <MoviesList title={"Upcoming Movies"} movie={movie.upcomingMoviesList} />
        <MoviesList title={"Popular Movies"} movie={movie.popularMoviesList} />
      </div>
      {movieOverviewState && movieData && <div className='flex absolute sm:left-[25%] sm:right-[25%] w-2/4 h-1/2 bg-black z-20 items-center opacity-90 rounded-md gap-2'>
        <img className="opacity-100 w-1/2 h-full p-2" src={IMG_LINK + movieData.posterPathData} alt="movie-poster" />
        <div className='flex flex-col p-2 gap-2'>
          <h1 className='text-white text-2xl sm:text-5xl font-bold'>{movieData.movieTitle}</h1>
          <p className='text-white'>{movieData.overviewData}</p>
          <button className='flex bg-white text-black justify-center items-center font-bold text-center py-1 px-2 sm:px-6 sm:py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-60 w-1/4'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/play--v1.png" alt="play--v1"/>Play</button>
        </div>
      </div>}
    </div>)
  )
}

export default SecondaryContainer
