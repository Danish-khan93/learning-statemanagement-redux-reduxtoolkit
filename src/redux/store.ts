import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feature/counterSlice";
// import todosReducer from "./feature/todosSlice";
// import ProdutReducer from "../redux/feature/productSLice"
import authReducer from "./feature/authSlice"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // todo: todosReducer,
    // products: ProdutReducer
    auth:authReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
