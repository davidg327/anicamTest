import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  requesting: false,
  token: '',
  trm: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAccessToken: (state) => {
      state.requesting = true;
    },
    getAccessTokenSuccess: (state, action) => {
      state.requesting = false;
      state.token = action.payload;
    },
    getTrm: (state) => {
      state.trm = 0;
    },
    getTrmSuccess: (state, action) => {
      state.trm = action.payload;
    },
  },
});

export const {getAccessToken, getAccessTokenSuccess, getTrm, getTrmSuccess} =
  authSlice.actions;

export default authSlice.reducer;
