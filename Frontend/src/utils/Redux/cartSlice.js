import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for managing cart state
const cartSlice = createSlice({
    name: "cart", // Name of the slice
    initialState: {
        // Initial state of the cart
        RestaurantID: null,
        RestaurantName: null,
        RestaurantImage: null,
        RestaurantArea: null,
        items: [], // Array to store cart items
        TotalPrice: 0 // Total price of items in the cart
    },
    reducers: {
        // Reducer function to add items to the cart
        addItems: (state, action) => {
            const { menu, ResID, ResName, ResImg, ResArea } = action.payload;

            // Finding existing item index in the cart
            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === menu.card.info.id);
            // Calculating dish price
            const dishPrice = (menu.card.info.defaultPrice / 100) || (menu.card.info.price / 100);

            // Setting restaurant details if not already set
            if (state.RestaurantID === null) {
                state.RestaurantID = ResID;
                state.RestaurantName = ResName;
                state.RestaurantImage = ResImg;
                state.RestaurantArea = ResArea;
            };

            // Updating state based on existing item
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count++;
                state.TotalPrice += dishPrice;
            } else {
                state.items.push({ menu: menu, count: 1 });
                state.TotalPrice += dishPrice;
            };
        },
        // Reducer function to remove items from the cart
        removeItems: (state, action) => {
            const existingItemIndex = state.items.findIndex((item) => item.menu.card.info.id === action.payload.card.info.id);
            const dishPrice = (action.payload.card.info.defaultPrice / 100) || (action.payload.card.info.price / 100);

            // Updating state based on existing item
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count--;

                // Removing item if count reaches zero
                if (state.items[existingItemIndex].count === 0) {
                    state.items.splice(existingItemIndex, 1);
                };

                // Clearing restaurant details if cart is empty
                if (state.items.length === 0) {
                    state.RestaurantID = null;
                    state.RestaurantName = null;
                    state.RestaurantImage = null;
                    state.RestaurantArea = null;
                };
                state.TotalPrice -= dishPrice;
            };
        },
        // Reducer function to clear the cart
        clearCart: (state) => {
            state.items = [];
            state.TotalPrice = 0;
            state.RestaurantID = null;
            state.RestaurantName = null;
            state.RestaurantImage = null;
            state.RestaurantArea = null;
        }
    }
});

// Exporting actions and reducer
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
