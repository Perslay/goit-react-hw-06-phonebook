import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filter(state, action) {},
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
