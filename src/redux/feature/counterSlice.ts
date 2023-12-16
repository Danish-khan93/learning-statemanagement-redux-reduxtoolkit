import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {

      state.counter === 0 ? state.counter = 0 : state.counter -= 1
       
    },
    incrementByAmount: (state, actions) => {
      state.counter += actions.payload;
    },
    reset: (state) => {
      state.counter = 0;
    },
    incrementByUser: (state,action)=>{
        state.counter += action.payload
    }
  },
});

export const { increment, decrement, incrementByAmount, reset,incrementByUser } =
  counterSlice.actions;
export default counterSlice.reducer;
