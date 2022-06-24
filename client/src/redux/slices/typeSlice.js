import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  types: [
    {id: 1, name: 'Холодильники'},
    {id: 2, name: 'Смартфоны'}
  ],
  selectedType: {}
}

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    }
  }
});

const {actions, reducer} = typeSlice;

export default reducer;
export const {setTypes, setSelectedType} = actions;