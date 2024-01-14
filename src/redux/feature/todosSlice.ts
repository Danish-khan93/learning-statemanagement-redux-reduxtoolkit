import { createSlice, nanoid } from "@reduxjs/toolkit";

type INITIALSTATE = {
  todos: [{ id: String; text: String; isCompleted: Boolean }];
};

const initialState: INITIALSTATE = {
  todos: [{ id: "1", text: "hello redux", isCompleted: false }],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // @ts-ignore
      state.todos = state.todos.filter((value) => {
        return value.id !== action.payload;
      });
    },
    
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo } = todosSlice.actions;
