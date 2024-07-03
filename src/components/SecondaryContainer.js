import React, { useState, useEffect, useRef } from 'react'
import MoviesList from './MoviesList'
import { useDispatch, useSelector } from 'react-redux';
import { CROSS_BUTTON_URL, IMG_LINK, PLAY_BUTTON_URL } from '../utils/constants';
import { addMovieOverview } from '../utils/MoviesSlice';
import lang from '../utils/languageConstants'
import { toggleHeaderList } from '../utils/HeaderListSlice';
import { toggleHomeValue, togglegptSearchValue, togglevideoPlayerValue } from '../utils/HeaderMenuSlice';
import ShimmerUI from './ShimmerUI';



const SecondaryContainer = () => {

  const movie = useSelector((store) => store.addMovie);
  const movieOverviewState = useSelector((store) => store.addMovie.movieOverviewState);
  const movieData = useSelector((store) => store.addMovie.posterPathOverView);
  const movieInfo = useSelector((store) => store.gptstate?.translate);
  const limitExceeded=useSelector((store)=>store.language.apiLimitExceeded);
  const [showMovieOverview, setShowMovieOverview] = useState(false);
  const movieDataRef = useRef(null);
  const language = useSelector(store => store.language.languageSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieOverviewState && movieDataRef.current) {
      movieDataRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [ movieInfo]);


  const handleClick = () => {
    setShowMovieOverview(!showMovieOverview);
  };

  const handleCloseEvent = () => {
    dispatch(addMovieOverview());

  }
  const handleHeaderListEvent = () => {
    dispatch(toggleHeaderList(false));
  }

  const handleVideoPlayerEvent = () => {
    dispatch(togglevideoPlayerValue(true));
    dispatch(toggleHomeValue(false));
    dispatch(togglegptSearchValue(false));
  }


  return  (
    <div className='flex flex-col bg-black pb-5 relative w-screen' onClick={() => {
      handleClick();
      handleHeaderListEvent();
    }}>
      <div className='flex flex-col lg:-mt-28 lg:z-20 gap-8'>
        <MoviesList title={lang[language].movieCardTitleOne} movie={movie.nowPlayingMoviesList} />
        <MoviesList title={lang[language].movieCardTitleTwo} movie={movie.topRatedMoviesList} />
        <MoviesList title={lang[language].movieCardTitleThree} movie={movie.upcomingMoviesList} />
        <MoviesList title={lang[language].movieCardTitleFour} movie={movie.popularMoviesList} />
      </div>
      {movieOverviewState && movieData && movieInfo && <div className='flex absolute lg:left-[25%] lg:right-[25%] w-full lg:w-2/4 h-1/2 bg-black z-20 items-center opacity-90 rounded-md gap-2' ref={movieDataRef}>
        <img className="absolute top-2 right-2 cursor-pointer" width="24" height="24" onClick={handleCloseEvent} src={CROSS_BUTTON_URL} alt="multiply--v1" />
        <img className="opacity-100 w-1/2 h-full p-2" src={IMG_LINK + movieData.posterPathData} alt="movie-poster" />
        <div className='flex flex-col p-2 gap-2'>
          <h1 className='text-white text-2xl lg:text-5xl font-bold'>{movieInfo.title}</h1>
          <p className='text-white text-[14px] lg:hidden'>
            {movieInfo.overview.length > 300 ? movieInfo.overview.substring(0, 300) + "..." : movieInfo.overview}
          </p>
          <p className='hidden lg:block text-white text-[14px]'>{movieInfo.overview}</p>
          {limitExceeded && <p className='text-red'>The translation service is currently unavailable as the API limit has been exceeded.</p>}
          <button className='flex bg-white text-black justify-center items-center font-bold text-center py-1 px-2 sm:px-6 lg:py-2 gap-1 rounded-sm transition duration-300 hover:bg-opacity-60 lg:w-1/4'
            onClick={() => handleVideoPlayerEvent()}>
            <img width="30" height="30" src={PLAY_BUTTON_URL} alt="play--v1" />{lang[language].playButton}</button>
        </div>
      </div>}
    </div>
  )

}

export default SecondaryContainer

