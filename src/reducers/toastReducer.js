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
      console.log('Do something');
    });
});

export default toastReducer;
