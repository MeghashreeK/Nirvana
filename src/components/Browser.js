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
  const homeVisibility = useSelector((store) => store.headerMenu.homeValue);
  const gptSearchPageVisibility = useSelector((store) => store.headerMenu.gptSearchValue);
  const videoPlayerVisibility = useSelector((store) => store.headerMenu.videoPlayerValue);


  useTopRatedMovies();
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTranslation();

  return (
    <div>
      <Header />

      {(gptSearchPageVisibility) && <GeminiSearch />}

      {(homeVisibility) && <div>
        <MainContainer />
        <SecondaryContainer />
      </div>}

      {(videoPlayerVisibility) && <VideosPlayer />}
    </div>

  )
}

export default Browser;

