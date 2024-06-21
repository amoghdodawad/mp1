import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        fullName : null,
        email : null,
        token: null,
        contactNumber: null,
        balance: 0,
        numberOfDelivery: 0
    },
    reducers : {
        setUser : (state, action) => {
            const { fullName, email, token, contactNumber, balance, numberOfDelivery } = action.payload;
            state.fullName = fullName;
            state.email = email;
            state.token = token;
            state.contactNumber = contactNumber;
            state.balance = balance;
            state.numberOfDelivery = numberOfDelivery;
        },
        removeUser: (state, action) => {
            state.fullName = null;
            state.email = null;
            state.token = null;
            state.contactNumber = null;
            state.balance = 0;
            state.numberOfDelivery = 0;
        },
        setName : (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEmail : (state, action) => {
            state.email = action.payload;
        },
        removeName : (state, action) => {
            state.name = null;
        },
        removeEmail : (state, action) => {
            state.email = null;
        }
    }
})

export default userSlice;
export const { setEmail, setName, removeEmail, removeName, setUser, setToken, removeUser } = userSlice.actions;