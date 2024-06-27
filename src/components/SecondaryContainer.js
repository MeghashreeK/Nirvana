import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movie=useSelector((store)=>store.addMovie);
 
  return (
    movie && (<div className='flex flex-col bg-black pb-5'>
     <div className='flex flex-col lg:-mt-28 lg:z-20 gap-8'>
     <MoviesList title={"Now Playing Movies"} movie={movie.nowPlayingMoviesList}/>
     <MoviesList title={"Top Rated Movies"} movie={movie.topRatedMoviesList}/>
     <MoviesList title={"Upcoming Movies"} movie={movie.upcomingMoviesList}/>
     <MoviesList title={"Popular Movies"} movie={movie.popularMoviesList}/>
     </div>
    </div>)
  )
}

export default SecondaryContainer