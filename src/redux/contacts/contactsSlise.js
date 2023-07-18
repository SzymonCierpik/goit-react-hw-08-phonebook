import { createSlice } from "@reduxjs/toolkit";
import {
  getContactsOperation,
  postContactOperation,
  deleteContactOperation,
} from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET INFORMATION =========================
      .addCase(getContactsOperation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactsOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getContactsOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // POST INFORMATION =========================
      .addCase(postContactOperation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postContactOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(postContactOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // DELETE INFORMATION =========================
      .addCase(deleteContactOperation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(deleteContactOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // DEFAULT CASE =========================
      .addDefaultCase((state, action) => {});
  },
});

export const contactsReducer = contactSlice.reducer;
