import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feature/counterSlice";
// import todosReducer from "./feature/todosSlice";
import PostReducer from "./feature/post/postSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // todo: todosReducer,
    post : PostReducer,
  },
});
