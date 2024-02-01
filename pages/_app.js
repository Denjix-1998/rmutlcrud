import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";

// import { store } from "../redux/store";
import { Provider } from "react-redux";
import rootReducer from "@/redux/reducer"; // Adjust the import path based on your project structure
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducer,
  // Other store configurations if needed
});
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
