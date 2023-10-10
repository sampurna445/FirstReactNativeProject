import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    loginUser: state => {
      state.isLogin = true;
    },
    logoutUser: (state, action) => {
      state.isLogout = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser, logoutUser} = userAuthSlice.actions;

export default userAuthSlice.reducer;
