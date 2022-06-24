import {configureStore} from '@reduxjs/toolkit';

import user from '../slices/userSlice';
import brand from '../slices/brandSlice';
import device from '../slices/deviceSlice';
import type from '../slices/typeSlice';

const store = configureStore({
  reducer: {
    user,
    brand,
    device,
    type
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;