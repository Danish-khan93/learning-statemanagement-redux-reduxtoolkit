import { fetchingProducts } from "../redux/feature/productSLice";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Pagination } from "@mui/material";



type PRODUCT = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Product = () => {
  // @ts-ignore
  const [page, setPage] = useState<number>(1);
  console.log(page);
// using ref  
const urlParam2 = useRef(
  {
    limit: 10,
    skip: 0,
  }
)

  
  console.log(urlParam2, "urlparam in product");

  // using useRef for ristrict the useeffect only render one time
  const load = useRef(false);

  const { product, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!load.current) {
      console.log(load);
      dispatch(fetchingProducts(urlParam2.current));
    }

    

    return () => {
      load.current = true;
    };
  }, []);
  // @ts-ignore
  const handleChange = (e, p: number) => {
    console.log(e.target.value);
    setPage(p);
    console.log(urlParam2.current.limit * page);

    if (product.length < urlParam2.current.limit * p) {
      urlParam2.current.skip =urlParam2.current.limit* p -urlParam2.current.limit
       console.log(urlParam2);

      // setUrlParam({
      //   ...urlParam,
      //   skip: urlParam.limit * p - urlParam.limit,
      // });
      dispatch(fetchingProducts(urlParam2.current));
    }
  };
  if (isLoading) return null;
  return (
    <div>
      Product
      <div className="flex justify-evenly gap-3 flex-wrap">
        {product &&
          product
            .slice(
              page * urlParam2.current.limit - urlParam2.current.limit,
              page * urlParam2.current.limit
            )
            .map((value: PRODUCT) => {
              return (
                <div key={value.id} className="w-[300px] bg-red-200">
                  <h1>{value.id  } indexnumber {value.id-1}</h1>
                  <h1>{value.title}</h1>
                  <p>{value.category}</p>
                  <p> {value.brand}</p>
                  <p>{value.price}</p>
                </div>
              );
            })}
      </div>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};

export default Product;
