import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";

const store = configureStore({
    reducer : { 
        todos : todoSliceReducer
    },
    devTools : true // enables react chrome extension to work
})

export default store