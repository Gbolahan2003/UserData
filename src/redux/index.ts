import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../interface/user.interface";


interface initialState{
    Users:User[]|null
    id:number|null
}

const initialState:initialState ={
    Users:null,
    id:null

}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsers:(state:initialState, action:PayloadAction<User[]>)=>{
            state.Users = action.payload
        },
        setID:(state:initialState, action:PayloadAction<number|null>)=>{
            state.id = action.payload
        }
    }
})


export const { setUsers, setID} = UserSlice.actions;


export default UserSlice.reducer;