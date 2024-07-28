import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./modules/takeaway"
const store = configureStore({
    reducer:{
        foods : Reducer
    }
})

export default store