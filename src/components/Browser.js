import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useTranslation from '../customHooks/useTranslation';
import { useSelector } from 'react-redux';
import GeminiSearch from './GeminiSearch';
import VideosPlayer from './VideosPlayer';

const Browser = () => {
  const gptSearchValue=useSelector(store=>store.gptstate.gptToggle);
  const videoPlayerValue=useSelector((store)=>store.videoPlayer.playerState);

  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTranslation();

  return (
    <div>
      <Header/>
      {(gptSearchValue) && (!videoPlayerValue) && <GeminiSearch/>}
      {(!gptSearchValue) && (!videoPlayerValue) && <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
      }
      {
        (!gptSearchValue) && videoPlayerValue && <VideosPlayer/>
      }
    </div>

  )
}

export default Browser;

