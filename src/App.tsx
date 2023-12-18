// import Counter from "./component/Counter";
// import Todo from "./component/Todo";
// import Product from "./component/Product";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
const App = () => {
  return (
    <>
      <h1 className="text-center font-bold text-[32px]">REDUX</h1>
      {/* <Counter />; */}
      {/* <Todo /> */}
      {/* <Product/> */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
