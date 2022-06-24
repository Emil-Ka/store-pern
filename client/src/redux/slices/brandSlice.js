import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  brands: [
    {id: 1, name: 'Samsung'},
    {id: 2, name: 'Apple'}
  ],
  selectedBrand: {}
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    }
  }
});

const {actions, reducer} = brandSlice;

export default reducer;
export const {setBrands, setSelectedBrand} = actions;