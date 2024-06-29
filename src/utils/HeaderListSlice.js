import { createSlice } from "@reduxjs/toolkit";

const HeaderListSlice=createSlice({
    name:"headerList",
    initialState:{
        headerListToggle:false,
    },
    reducers:{
        toggleHeaderList:(state,action)=>{
            state.headerListToggle=action.payload;
        }
    }
})

export const {toggleHeaderList}=HeaderListSlice.actions;
export default HeaderListSlice.reducer;