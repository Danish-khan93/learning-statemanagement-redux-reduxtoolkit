import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feature/counterSlice";
import todosReducer from "./feature/todosSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todo: todosReducer,
  },
});
