import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import axios from "axios";
type INITIALSTATE = {
  product: [] | PRODUCT[];
  isLoading: Boolean;
  isError: null | any;
};

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

type URLPARAM = {
  limit: Number;
  skip: Number;
};

export const fetchingProducts = createAsyncThunk(
  "products/apiproduct",
  async (urlParam: URLPARAM, { rejectWithValue }) => {
    const response = await axios
      .get(
        `https://dummyjson.com/products?limit=${urlParam.limit}&skip=${urlParam.skip}`
      )
      .then((res) => {
        return res.data;
      });
    try {
      return response;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

const initialState: INITIALSTATE = {
  product: [
    {
      id: 0,
      title: "string",
      description: "string",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "string",
      category: "string",
      thumbnail: "string",
      images: ["", ""],
    },
  ],
  isLoading: false,
  isError: null,
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchingProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchingProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.product = [...state.product, ...action.payload.products];
    });
    builder.addCase(fetchingProducts.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },
  reducers: {},
});

export default productSlice.reducer;
