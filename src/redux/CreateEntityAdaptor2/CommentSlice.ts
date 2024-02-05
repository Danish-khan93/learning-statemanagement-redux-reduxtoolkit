import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

interface COMMENTS {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentFetch = createAsyncThunk(
  "Comments/commentsFetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );

      return await res.data;
    } catch (error) {
      throw rejectWithValue;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id: number) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      console.log(res);
      return id;
    } catch (error) {
      console.log("error");
    }
  }
);
export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({id, newData}:{id:number,newData:{body:string}}) => {
    try {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        { body: newData }
      );
      console.log(res);
      return {id,changes:newData};
    } catch (error) {
      console.log("error");
    }
  }
);

const CommentAdaptor = createEntityAdapter({
  selectId: (comment: COMMENTS) => comment.id,
});

const commentSLice = createSlice({
  name: "comments",
  initialState: CommentAdaptor.getInitialState({
    isLoading: false,
    isError: null,
  }),
  extraReducers: (builder) => {
    builder.addCase(commentFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(commentFetch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      CommentAdaptor.setAll(state, payload);
    });
    builder.addCase(commentFetch.rejected, (state) => {
      // @ts-ignore
      state.isError = "error";
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      CommentAdaptor.removeOne(state, Number(payload));
    });
    builder.addCase(deleteComment.rejected, (state) => {
      // @ts-ignore
      state.isError = "error is delete";
    });
    builder.addCase(updateComment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateComment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      CommentAdaptor.updateOne(state, {
        id: payload?.id,
        changes: payload?.changes,
      });
    });
    builder.addCase(updateComment.rejected, (state) => {
      // @ts-ignore
      state.isError = "error is delete";
    });
  },
  reducers: {},
});

export const commentSelector = CommentAdaptor.getSelectors(
  (state: any) => state.comments
);

export default commentSLice.reducer;
