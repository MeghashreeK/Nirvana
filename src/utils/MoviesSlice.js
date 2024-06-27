import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"addMovie",
    initialState:{
        topRatedMoviesList:null,
        nowPlayingMoviesList:null,
        upcomingMoviesList:null,
        popularMoviesList:null,
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
        addTrailerVideo:(state,action)=>{
            state.trailerList=action.payload;
        }
    }
})
export const {addTopRatedMovies,addNowPlayingMovies,addUpcomingMovies,addPopularMovies,addTrailerVideo}=MoviesSlice.actions;
export default MoviesSlice.reducer;