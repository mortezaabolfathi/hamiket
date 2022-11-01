import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct=createAsyncThunk("product/getPlaceholderAPI", async (_,thunkAPI)=>{
    try{
        const product=await axios.get("http://localhost:3001/photos");
        return product.data
    }catch(error){
        console.log("data is not get")
    }
});
// export const searchProduct=createAsyncThunk("product/SearchProduct", async (_,thunkAPI)=>{
//     try{
//         const product=await axios.get("http://localhost:3001/photos");
//         return product.data
//     }catch(error){
//         console.log("data is not get")
//     }
// });


const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:false,
    },
    reducers:{},
    extraReducers:{
        [getProduct.fulfilled]:(state, action)=>{
            return{...state,products:action.payload,loading:false}
        },
        [getProduct.pending]:(state, action)=>{
            return{...state,products:[],loading:true}
        },
        [getProduct.rejected]:(state, action)=>{
            console.log("thi is reject")
        },
        // [searchProduct.fulfilled]:(state,action)=>{
        //     // const itemFind=state.product.find((item)=>item.title===action.payload);
        //     console.log('its ok')     
        // }
    }
})

export  default productSlice.reducer;