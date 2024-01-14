import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdaptor = createEntityAdapter();
export const todoSelectors = todoAdaptor.getSelectors(
  (state: [] | any) => state.todo
);

const todoSlice = createSlice({
  name: "todo",
  initialState: todoAdaptor.getInitialState(),
  reducers: {
    addTodo: todoAdaptor.addOne,
    addTodos:todoAdaptor.addMany,
    removeTodo: todoAdaptor.removeOne,
    removeTodos: todoAdaptor.removeAll,
    updateTodo: todoAdaptor.setOne
  },
});

export const {addTodo,addTodos,removeTodo,removeTodos,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
