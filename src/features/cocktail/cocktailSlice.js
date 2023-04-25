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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
        console.log(action.payload.drinks[0]);
      });
  },
});

export default cocktailSlice.reducer;
export const selectCocktail = (state) => state.cocktail;
