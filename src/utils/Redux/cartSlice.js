import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        RestaurantID: null,
        RestaurantName: null,
        RestaurantImage: null,
        RestaurantArea: null,
        items: [],
        TotalPrice: 0
    },
    reducers: {
        addItems: (state, action) => {
            const { menu, ResID, ResName, ResImg, ResArea } = action.payload;

            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === menu.card.info.id);
            const dishPrice = (menu.card.info.defaultPrice / 100) || (menu.card.info.price / 100);

            if (state.RestaurantID === null) {
                state.RestaurantID = ResID;
                state.RestaurantName = ResName;
                state.RestaurantImage = ResImg;
                state.RestaurantArea = ResArea;
            };

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count++;
                state.TotalPrice += dishPrice;
            } else {
                state.items.push({ menu: menu, count: 1 });
                state.TotalPrice += dishPrice;
            };

        },
        removeItems: (state, action) => {
            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === action.payload.card.info.id);
            const dishPrice = (action.payload.card.info.defaultPrice / 100) || (action.payload.card.info.price / 100);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count--;

                if (state.items[existingItemIndex].count === 0) {
                    state.items.splice(existingItemIndex, 1);
                };

                if (state.items.length === 0) {
                    state.RestaurantID = null;
                    state.RestaurantName = null;
                    state.RestaurantImage = null;
                    state.RestaurantArea = null;
                };
                state.TotalPrice -= dishPrice;
            };
        }
    }
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;