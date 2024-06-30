import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "gptstate",
    initialState: {
        translate: null,
        errorValue:false,
    },
    reducers: {
       
        addTranslatedSentence: (state, action) => {
            state.translate = action.payload;
        },
        addErrorValue:(state,action)=>{
            state.errorValue=action.payload;
        }
    }

})

export const { addTranslatedSentence, addErrorValue } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
