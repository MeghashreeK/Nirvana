import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GeminiSearch from './GeminiSearch';

const Browser = () => {
  const gptSearchValue=useSelector(store=>store.gptstate.gptToggle);
  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {(gptSearchValue) && <GeminiSearch/>}
      {(!gptSearchValue) && <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
      }
    </div>

  )
}

export default Browser;