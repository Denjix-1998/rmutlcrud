// store.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import listenerMiddleware from "./listener";

const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

listenerMiddleware.startListening(); // Ensure that the middleware is active

export default store;
