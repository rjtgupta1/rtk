import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:[],
    reducers:{
        addUser(state,action){ alert("user added"); },
        removeUser(state,action){ alert("user removed"); },
        deleteAllUsers(state,action){ alert("deleted all users"); },
    }
})

export default userSlice;