import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state = [...state, action.payload];
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCar} = carSlice.actions;

export default carSlice.reducer;
