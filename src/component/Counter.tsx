import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  incrementByUser,
} from "../redux/feature/counterSlice";
const Counter = () => {
  const userRef = useRef(null);
  const counter = useSelector((state: any) => state.counter.counter);
  console.log(counter);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleincreaseByUser = () => {
    // @ts-ignore
    const userValue = userRef?.current!.value;
    dispatch(incrementByUser(Number(userValue)));
    // @ts-ignore
    userRef.current.value = "";
  };

  return (
    <>
      <h1 className="text-green-700 font-bold text-[36px] text-center">
        Counter
      </h1>
      <h2 className="text-center text-[36px] font-semi-bold">{counter}</h2>
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-gray-500 text-[#fff] w-[70px] h-[40px] text-[24px]"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-gray-500 text-[#fff] w-[70px] h-[40px] text-[24px]"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-gray-500 text-[#fff] text-[24px] my-4 p-3"
          onClick={handleIncrementByAmount}
        >
          increment by 5
        </button>
        <button
          className="bg-gray-500 text-[#fff] text-[24px] my-4 p-3"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="number"
          className="bg-gray-200 h-[55px]"
          ref={userRef}
          name={"userAmount"}
        />
        <button
          className="bg-gray-500 text-[#fff] text-[24px] my-4 p-3"
          onClick={handleincreaseByUser}
        >
          increaseByUser
        </button>
      </div>
    </>
  );
};

export default Counter;
