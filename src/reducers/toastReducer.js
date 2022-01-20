import { createReducer } from '@reduxjs/toolkit';
import { showToast, hideToast } from '../actions/toastActions';

const initialState = {
  toast: {
    display: false,
    message: '',
    type: 'default',
  },
};

const toastReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showToast, (state, action) => {
      state.toast = { ...action.payload, display: true };
    })
    .addCase(hideToast, (state) => {
      state.toast = { ...state, display: false };
    });
});

export default toastReducer;
