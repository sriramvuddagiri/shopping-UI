import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
//   followingAccounts: null,
  Products : null,
};





export const getAllProducts = createAsyncThunk(
  "/app2/api/v1.0/Shopping/all",
  async (thunkAPI) => {
    const response = await axios({
      method: "get",
      url: "/app2/api/v1.0/Shopping/all",
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  }
);
export const getAllAdminProducts = createAsyncThunk(
  "/app2/api/v1.0/Shopping/adminall",
  async (thunkAPI) => {
    const response = await axios({
      method: "get",
      url: "/app2/api/v1.0/Shopping/adminall",
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  }
);
export const getProductsByProductName = createAsyncThunk(
  "/app2/api/v1.0/Shopping/products/search",
  async ({ProductName},thunkAPI) => {
    const response = await axios({
      method: "get",
      url: "/app2/api/v1.0/Shopping/"+ProductName, //products/search/
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  }
);
export const getProductsByProdName = createAsyncThunk(
  "/app2/api/v1.0/Shopping/products/search",
  async ({ProductName},thunkAPI) => {
    const response = await axios({
      method: "get",
      url: "/app2/api/v1.0/Shopping/search/"+ProductName, //products/search/
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  }
);


export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
    builder.addCase(getAllAdminProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
    builder.addCase(getProductsByProductName.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
  },
});

export default ProductSlice.reducer;
