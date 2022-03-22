import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/auth/authSlice';
import dishReducer from '../features/dishes/dishSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    dishes: dishReducer
  },
});
