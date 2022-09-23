import { createSlice } from "@reduxjs/toolkit";
export const State=createSlice({
    name:"State",
    initialState:{
        menu:false
    },
    reducers:{
        Displaymenu:(state)=>{
          if (state.menu) {
                state.menu=false
          } else {
            state.menu=true            
          }  
        },
    }
})
export const {Displaymenu} =State.actions;
export default State.reducer;