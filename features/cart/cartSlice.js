// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemToAdd = action.payload;

//       //checking if item is present in the cart already and finding the index
//       const itemPresentKey = state.cartItems.findIndex(thisElement => {
//         return thisElement.item.name === itemToAdd.name;
//       });
//       //if the item is already present increasing the quantity
//       if (itemPresentKey !== -1) {
//         const itemFound = state.cartItems[itemPresentKey];
//         itemFound.quantity += 1;
//       } else {
//         //if item is not present int cart just pushing to the cart
//         state.cartItems.push({item: itemToAdd, quantity: 1});
//       }
//     },
//     removeFromCart: (state, action) => {},
//     clearCart: state => {
//       state.cartItems.length = 0;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

// export default cartSlice.reducer;

// cartSlice.js

import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find(
        item => item.name === itemToAdd.name,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({...itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      const existingItem = state.cartItems.find(
        item => item.name === itemToRemove.name,
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            item => item.name !== itemToRemove.name,
          );
        }
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
