import { configureStore } from "@reduxjs/toolkit";
import ReducerProducts from "./products/productSlice";
import ReducerUser from "./userFind/usefind";

export const store=configureStore({
    reducer:{
       users:ReducerUser,
       products:ReducerProducts
    }
});