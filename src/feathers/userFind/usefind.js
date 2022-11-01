import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser=createAsyncThunk("get/users",async(_,thunkAPI)=>{
  try{
    const users=await axios.get("http://localhost:3001/users");
    // console.log(users.data)
    return users.data
    }catch(error){
        console.log("user data is not valid ")
    }
});

const adminUser=createSlice({
    name:"userAdmin",
    initialState:{
        users:[],
        error:""
    },
    reducers:{

    },
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            state.users=action.payload
        },
        [getUser.pending]:(state,action)=>{
            // console.log("data users is pending");
        },
        [getUser.rejected]:(state,action)=>{
            console.log("user rejected data")
        },
    }
    
})

export default adminUser.reducer;
