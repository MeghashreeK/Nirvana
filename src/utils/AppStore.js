import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import GptSearchSlice from "./GptSearchSlice";
import LanguageSlice from "./LanguageSlice";
import HeaderListSlice from "./HeaderListSlice";
import VideoPlayerSlice from "./VideoPlayerSlice";

const AppStore=configureStore({
    reducer:{
        userdetails:UserSlice,
        addMovie:MoviesSlice,
        gptstate:GptSearchSlice,
        language:LanguageSlice,
        headerList:HeaderListSlice,
        videoPlayer:VideoPlayerSlice,
    }
});
export default AppStore;