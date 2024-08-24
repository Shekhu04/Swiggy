import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        items: [],
    },

    reducers: {

        //Vanilla (old) Redux => Don't Mutate State,returning was mandatory
        //const newState = [...state];
        //newState.items.push(action.payload);
        //return newState;

        //Redux Toolkit => We have to mutate the state
        //Redux toolkit uses Immer BTS 
        addItem:(state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const {addItem , removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;