import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items : []
    },
    reducers : {
        addItems : (state, action)=> {
            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === action.payload.card.info.id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count++;
                // state.totalPrice += itemPrice;
            } else {
                state.items.push({menu: action.payload, count : 1});
                // state.totalPrice += itemPrice;
            }

        },
        removeItems : (state, action) => {
            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === action.payload.card.info.id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count--;

                if (state.items[existingItemIndex].count === 0) {
                    state.items.splice(existingItemIndex, 1);
                };
            };
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;