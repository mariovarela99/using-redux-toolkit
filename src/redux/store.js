import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
