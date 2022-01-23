import { createReducer } from '@reduxjs/toolkit';
import { showToast, hideToast } from '../actions/toastActions';

const initialState = {
  toast: {
    display: null,
    message: '',
    type: 'default',
  },
};

const toastReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showToast, (state, action) => {
      state.toast = { ...action.payload, display: true };
    })
    .addCase(hideToast, (state, action) => {
      state.toast = { ...action.payload, display: false };
    });
});

export default toastReducer;
