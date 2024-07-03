import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:"language",
    initialState:{
        languageSelected:"en",
        apiLimitExceeded:false,
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.languageSelected=action.payload;
        },
        limitExceededFunction:(state,action)=>{
            state.apiLimitExceeded=action.payload;
        }
    }
})

export const {addLanguage,limitExceededFunction}=LanguageSlice.actions;
export default LanguageSlice.reducer;