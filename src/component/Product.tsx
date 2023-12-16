import { fetchingProducts } from "../redux/feature/productSLice";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

type URLPARAM = {
  limit: Number;
  skip: Number;
};

const Product = () => {
  // @ts-ignore
  const [urlParam, setUrlParam] = useState<URLPARAM>({
    limit: 10,
    skip: 0,
  });

  const load = useRef(false);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!load.current) {
      console.log(load);
      dispatch(fetchingProducts(urlParam));
    }
    return () => {
      load.current = true;
    };
  }, []);


  return <div>Product</div>;
};

export default Product;
