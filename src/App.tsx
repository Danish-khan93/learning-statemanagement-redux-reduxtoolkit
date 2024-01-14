// import Counter from "./component/Counter";
// import Todo from "./component/Todo";
// import Product from "./component/Product";
// import { Route, Routes } from "react-router-dom";
// import Login from "./component/Login";
// import MainTabs from "./component/multipageForm/MainTabs";

import AddTodo from "./component/createAdaptor/AddTodo";


// import SampleForm from "./component/multipageForm/formpages/SampleForm";
const App = () => {
  return (
    <>
      <h1 className="text-center font-bold text-[32px]">REDUX</h1>
      {/* <Counter />; */}
      {/* <Todo /> */}
      {/* <Product/> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
      </Routes> */}
      {/* <MainTabs /> */}
      {/* <SampleForm/> */}
      <AddTodo/>
  
      
    </>
  );
};

export default App;
