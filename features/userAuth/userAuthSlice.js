import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload;
    },
    logoutUser: (state, action) => {
      state.email = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser, logoutUser} = userAuthSlice.actions;

export default userAuthSlice.reducer;
