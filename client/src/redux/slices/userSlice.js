import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

const {actions, reducer} = userSlice;

export default reducer;
export const {setIsAuth, setUser} = actions;