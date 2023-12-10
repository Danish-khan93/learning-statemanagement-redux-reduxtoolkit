import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodo, removeTodo } from "../redux/feature/todosSlice";
import { MdDeleteOutline } from "react-icons/md";
const Todo = () => {
  const todoRef = useRef(null);
  const dispatch = useDispatch();
  const stateData = useSelector((state: any) => {
    return state.todo.todos;
  });
  console.log(stateData);

  const handleAddTodo = () => {
    // @ts-ignore
    const inputTodo = todoRef?.current?.value;
    dispatch(addTodo(inputTodo));

    // @ts-ignore
    todoRef.current.value = "";
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <input
          ref={todoRef}
          type="text"
          className="border-solid border-2 border-[#000] rounded-sm "
        />
        <button
          className="bg-gray-800 text-[#fff] p-2 rounded-sm  hover:bg-sky-700 transition ease-in-out"
          onClick={handleAddTodo}
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col items-center  my-10">
        {stateData.map((value: any) => {
          return (
            <div key={value.id} className="flex gap-3">
              <p>{value.text}</p>
              <button
                onClick={() => {
                  dispatch(removeTodo(value.id));
                }}
              >
                <MdDeleteOutline />
              </button>
             
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
