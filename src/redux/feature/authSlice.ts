import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type FORMTYPE = {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
};
type INITIALSTATE = {
  isLoading: Boolean;
  userInfo: {} | any;
  userToken: any | null;
  error: any | null;
  success: Boolean;
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async (data: FORMTYPE, { rejectWithValue }) => {
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const data2 = await axios.post(
        "https://658084956ae0629a3f556047.mockapi.io/signup",
        data,
        { headers: config.header }
      );
      console.log(data2.data);

      return data2.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: INITIALSTATE = {
  isLoading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authSignUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = action.payload;
      state.userToken = action.payload.email;
      localStorage.setItem("userToken", JSON.stringify(state.userToken));
    });
    builder.addCase(authSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  reducers: {},
});

export default authSlice.reducer;
