import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const productgetting = createAsyncThunk(
  "product/productgetting",
  async (
    { limit, skip }: { limit: number; skip: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
      );
      console.log(res.data.products);
      return res.data.products;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const productAdapter = createEntityAdapter({
  // @ts-ignore
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productAdapter.getInitialState({
    isloading: false,
    iserror: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productgetting.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(productgetting.fulfilled, (state, action) => {
      state.isloading = false;
      // @ts-ignore
      productAdapter.addMany(state, action.payload);
      productAdapter.updateMany(state, action.payload);
    });
    builder.addCase(productgetting.rejected, (state) => {
      state.iserror = true;
    });
  },
});
export const productSelectors = productAdapter.getSelectors(
  (state: any) => state.product
);
// export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
//   productSelectors;

export default productSlice.reducer;
export const {} = productSlice.actions;
