// import Counter from "./component/Counter";
// import Todo from "./component/Todo";
// import Product from "./component/Product";
// import { Route, Routes } from "react-router-dom";
// import Login from "./component/Login";
// import MainTabs from "./component/multipageForm/MainTabs";
// import AddTodo from "./component/createAdaptor/AddTodo";
// import SampleForm from "./component/multipageForm/formpages/SampleForm";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "@mui/material";
import { AppDispatch } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  productgetting,
  productSelectors,
} from "./redux/createentityadeptor/ProductSlice";
const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const urlParam = useRef({ limit: 10, skip: 0 });
  const totalProduct = useSelector(productSelectors.selectAll);
  console.log(totalProduct, "===");
  // const selectByProductId = useSelector((state:any)=>productSelectors.selectById(state,5))
  // console.log(selectByProductId,"===");
  // const productIDBySelectid = useSelector  S(productSelectors.selectIds(6))
  // console.log(productIDBySelectid,"===");

  // const pageChange = () => {
  //   dispatch(productgetting());
  //   console.log("hello");
  // };
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (totalProduct.length === 0) {
      dispatch(productgetting(urlParam.current));
    }
  }, []);
  const pageChange = (e:any, value: number) => {
    console.log(e);
    
    // if (totalProduct.length < urlParam.current.limit * value) {
      urlParam.current.skip = value * urlParam.current.limit-urlParam.current.limit;
      dispatch(productgetting(urlParam.current));
      setPage(value);
    // }
  };
  return (
    <>
      <h1 className="text-center font-bold text-[32px]">REDUX</h1>
      <div className="flex justify-center">
        <Pagination count={10} page={page} onChange={pageChange} />

        <div>
          <h1>{}</h1>
        </div>
      </div>
      {/* <Counter />; */}
      {/* <Todo /> */}
      {/* <Product/> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
      </Routes> */}
      {/* <MainTabs /> */}
      {/* <SampleForm/> */}
      {/* <AddTodo/> */}
    </>
  );
};

export default App;
