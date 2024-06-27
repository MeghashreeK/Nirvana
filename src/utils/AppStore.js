import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import GptSearchSlice from "./GptSearchSlice";
import LanguageSlice from "./LanguageSlice";

const AppStore=configureStore({
    reducer:{
        userdetails:UserSlice,
        addMovie:MoviesSlice,
        gptstate:GptSearchSlice,
        language:LanguageSlice
    }
});
export default AppStore;