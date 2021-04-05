import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state,action) => {
      state.room = action.payload;
    },

  }

});

// Action Selector 
export const { enterRoom } = appSlice.actions;

//Value Selector
export const selectRoomId = (state) => state.app.roomId;


export default appSlice.reducer;
