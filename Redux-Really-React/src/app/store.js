import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../FEATURE-S";
import reducers from "../Reducers";




export  const store=configureStore({
    reducer:reducers
})