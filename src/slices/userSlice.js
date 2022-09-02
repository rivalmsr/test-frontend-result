import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getPoints', async () => {
  const response = await axios.get(`https://my-json-server.typicode.com/glendmaatita/userjsondemo/db`);
  return response.data.data;
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: 'user',
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload);
    },
  },
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
