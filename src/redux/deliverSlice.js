import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'order',
    initialState : [],
    reducers : {
        setOrder(state , action) {
            const { item, pickupLocation, deliveryLocation, price } = action.payload;
            return [...state, {name: 'Amogh', item,pickupLocation,deliveryLocation, price, status:'pending'}];
        }
    }
})

export default userSlice;
export const { setOrder} = userSlice.actions;