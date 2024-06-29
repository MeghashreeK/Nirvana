import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "gptstate",
    initialState: {
        gptToggle: false,
        translate: null,
    },
    reducers: {
        gptToggleFunction: (state) => {
            state.gptToggle = (!state.gptToggle);
        },
        addTranslatedSentence: (state, action) => {
            state.translate = action.payload;
        }
    }

})

export const { gptToggleFunction, addTranslatedSentence } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
