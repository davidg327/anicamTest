import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  requesting: false,
  requestingLogin: false,
  successLogin: false,
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state) => {
      state.requesting = true;
    },
    createUserSuccess: (state) => {
      state.requesting = false;
    },
    loginUser: (state) => {
      state.requestingLogin = true;
      state.successLogin = false;
    },
    loginUserSuccess: (state, action) => {
      state.requestingLogin = false;
      state.successLogin = true;
      state.user = action.payload;
    },
  },
});

export const {createUser, createUserSuccess, loginUser, loginUserSuccess} = userSlice.actions;

export default userSlice.reducer;
