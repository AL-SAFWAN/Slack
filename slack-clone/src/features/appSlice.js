import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: '',
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state,action) => {
      state.roomId = action.payload;
    },

  }

});

// Action Selector 
export const { enterRoom } = appSlice.actions;

//Value Selector
export const selectRoomId = (state) => state.app.roomId.roomId;


export default appSlice.reducer;
