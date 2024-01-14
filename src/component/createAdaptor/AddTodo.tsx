import { useDispatch, useSelector } from "react-redux";
import { todoSelectors } from "../../redux/createentityadeptor/todoSlice";
import {
  // addTodo,
  addTodos,
  removeTodo,
  removeTodos,
  updateTodo,
} from "../../redux/createentityadeptor/todoSlice";
import { nanoid } from "@reduxjs/toolkit/react";
import { TextField, Button, Typography, Checkbox } from "@mui/material";
import { useState, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const UpdateRef = useRef<any>(null);
  const allTodo = useSelector(todoSelectors.selectEntities);
  // console.log(allTodo);
  const AllTodoIds = useSelector(todoSelectors.selectIds);
  console.log(AllTodoIds);

  const todoList = [];
  for (const id in allTodo) {
    if (Object.hasOwnProperty.call(allTodo, id)) {
      const todoItem = allTodo[id];
      todoList.push(todoItem);
    }
  }
  const clickHandler = () => {
    //   this methode is for add one items in array
    if (text.length > 0) {
      //   dispatch(addTodo({id:nanoid(), todo:text,completed:false}));
      // addmany items methode
      const items = text.split(",");
      dispatch(
        addTodos(
          items.map((item: any) => ({
            id: nanoid(),
            todo: item,
            completed: false,
          }))
        )
      );
    }
    setText("");
  };

  const changeHandler = (e: any) => {
    setText(e?.target?.value);
  };
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2"> Redux CreateEntityAdaptor</Typography>
      <TextField inputRef={UpdateRef} onChange={changeHandler} value={text} />
      <Button onClick={clickHandler}>Add</Button>
      {/* list */}

      <>
        <Typography variant="h3">TodoList</Typography>
        <Typography>TodoList :</Typography>
        <Typography>count :{AllTodoIds.length} </Typography>
        {todoList.map((item) => {
          return (
            <div key={item.id} className="flex items-center">
              <Checkbox onChange={() => {}} />

              <Typography>
                {
                  //@ts-ignore
                  item.todo
                }
              </Typography>

              <Button
                onClick={() => {
                  dispatch(removeTodo(item.id));
                }}
              >
                x
              </Button>
              <Button
                onClick={() => {
                  UpdateRef?.current?.focus();
                  dispatch(
                    // @ts-ignore
                    updateTodo({ id: item.id, todo: text })
                  );
                  setText("");
                }}
              >
                <EditIcon />
              </Button>
            </div>
          );
        })}
        <Button
          onClick={() => {
            dispatch(removeTodos());
          }}
        >
          Clear All todo
        </Button>
      </>
    </div>
  );
};

export default AddTodo;
