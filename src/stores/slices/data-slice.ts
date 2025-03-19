import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataState, IPost } from "../../types/posts-types";

const initialState: IDataState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IPost[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
