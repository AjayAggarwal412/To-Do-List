import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";

// Configure Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer, // Set the root reducer
});

export default store;
