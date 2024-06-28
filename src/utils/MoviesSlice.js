import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"addMovie",
    initialState:{
        topRatedMoviesList:null,
        nowPlayingMoviesList:null,
        upcomingMoviesList:null,
        popularMoviesList:null,
        movieOverviewState:false,
        posterPathOverView:null,
        trailerList:null,

    },
    reducers:{
        addTopRatedMovies:(state,action)=>{
            state.topRatedMoviesList=action.payload;
        },
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMoviesList=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMoviesList=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMoviesList=action.payload;
        },
        addMovieOverview:(state)=>{
            state.movieOverviewState=(!state.movieOverviewState);
        },
        addPosterPathOverView:(state,action)=>{
            state.posterPathOverView=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerList=action.payload;
        }
    }
})
export const {addTopRatedMovies,addNowPlayingMovies,addUpcomingMovies,addPopularMovies,addMovieOverview,addPosterPathOverView,addTrailerVideo}=MoviesSlice.actions;
export default MoviesSlice.reducer;