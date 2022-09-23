import { configureStore } from "@reduxjs/toolkit";
import State from "./reducers/State";
export const store=configureStore({
    reducer:{
        State:State      
    }
})