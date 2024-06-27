import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice=createSlice({
    name:"gptstate",
    initialState:{
        gptToggle:false,
    },
    reducers:{
        gptToggleFunction:(state)=>{
            state.gptToggle=(!state.gptToggle);
        }
    }

})

export const {gptToggleFunction} =GptSearchSlice.actions;
export default GptSearchSlice.reducer;
