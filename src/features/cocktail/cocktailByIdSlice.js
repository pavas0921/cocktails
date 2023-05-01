import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCocktailsById } from "../../services/cocktailsAPI";

export const fetchCocktailsById = createAsyncThunk(
  "cocktail/fetchCocktailsById",
  async () => {
    const data = await getCocktailsById();
    return data;
  }
);

const cocktailsByIdSlice = createSlice({
  name: "cocktailById",
  initialState: {
    cocktails: [],
    loading: false,
  },
  //initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktailsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktailsById.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktailById = action.payload.drinks;
      });
  },
});

export const selectCocktailById = (state) => state.cocktailById;
export default cocktailsByIdSlice.reducer;
