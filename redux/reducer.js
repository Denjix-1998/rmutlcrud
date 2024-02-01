// reducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app: {
    client: {
      toggleForm: false,
      formId: undefined,
      deleteId: null, // Fix the typo here
    },
  },
  // Other slices if any
};

export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.app.client.toggleForm = !state.app.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.app.client.formId = action.payload; // No need to fix anything here
    },
    deleteAction: (state, action) => {
      state.app.client.deleteId = action.payload; // Fix the typo here
    },
  },
});

export const { toggleChangeAction, updateAction, deleteAction } =
  ReducerSlice.actions;

export default ReducerSlice.reducer;
