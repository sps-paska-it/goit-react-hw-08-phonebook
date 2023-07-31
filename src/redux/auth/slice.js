import { createSlice } from '@reduxjs/toolkit';
import { verify, logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  name: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  verify: 'register',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeRegister(state, action) {
      state.verify = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = false;
        state.verify = payload.verify;
      })
      .addCase(verify.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.verify = 'register';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.verify = 'register';
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { changeRegister } = authSlice.actions;
