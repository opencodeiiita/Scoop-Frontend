import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
 user: null,
 status: 'idle',
 error: null,
};

export const fetchUserById = createAsyncThunk(
 "user/fetchUserById",
 async (userId, { rejectWithValue }) => {
   try {
     const response = await axios.get(`/api/user/${userId}`);
     return response.data;
   } catch (err) {
     return rejectWithValue(err.response.data);
   }
 }
);

const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
   builder
     .addCase(fetchUserById.pending, (state) => {
       state.status = 'loading';
     })
     .addCase(fetchUserById.fulfilled, (state, action) => {
       state.status = 'succeeded';
       state.user = action.payload;
     })
     .addCase(fetchUserById.rejected, (state, action) => {
       state.status = 'failed';
       state.error = action.error.message;
     });
 },
});

export default userSlice.reducer;
