import { createSlice } from "@reduxjs/toolkit";

const HeaderMenuSlice=createSlice({
    name:"headerMenu",
    initialState:{
        homeValue:true,
        gptSearchValue:false,
        videoPlayerValue:false,
    },
    reducers:{
        toggleHomeValue:(state,action)=>{
            state.homeValue=action.payload;
        },
        togglegptSearchValue:(state,action)=>{
            state.gptSearchValue=action.payload;
        },
        togglevideoPlayerValue:(state,action)=>{
            state.videoPlayerValue=action.payload;
        },
    }
})

export const {toggleHomeValue,togglegptSearchValue,togglevideoPlayerValue}=HeaderMenuSlice.actions;
export default HeaderMenuSlice.reducer;