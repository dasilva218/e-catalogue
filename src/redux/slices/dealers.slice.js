import { createSlice } from '@reduxjs/toolkit';

export const dealerslice = createSlice({
  name: 'dealers',
  initialState: { dealers: [] },
  reducers: {
    setDealers: (state, action) => {
      state.dealers = action.payload;
    },
  },
});

export const { setDealers } = dealerslice.actions;
export default dealerslice.reducer;
