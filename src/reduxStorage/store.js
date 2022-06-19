import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./mainSlice";


export default configureStore({
    reducer: {
        header: headerSlice
    }
})