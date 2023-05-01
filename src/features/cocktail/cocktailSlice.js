import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCocktails } from "../../services/cocktailsAPI";

export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCocktails",
  async () => {
    const data = await getAllCocktails();
    return data;
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktails: [],
    loading: false,
  },
  //initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      });
  },
});

export const selectCocktail = (state) => state.cocktail;
export default cocktailSlice.reducer;
