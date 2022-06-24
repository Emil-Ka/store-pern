import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  devices: [
    {id: 1, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'},
    {id: 2, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'},
    {id: 3, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'},
    {id: 4, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'},
    {id: 5, name: 'Iphone 12 Pro', price: 65000, rating: 5, img: 'https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg'}
  ]
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevices: (state, action) => {
      state.devices = action.payload;
    }
  }
});

const {actions, reducer} = deviceSlice;

export default reducer;
export const {setDevices} = actions;


