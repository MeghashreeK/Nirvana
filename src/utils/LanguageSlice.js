import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:"language",
    initialState:{
        languageSelected:"EN",
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.languageSelected=action.payload;
        }
    }
})

export const {addLanguage}=LanguageSlice.actions;
export default LanguageSlice.reducer;