import React from "react";
import { CustomRouter } from "./router";
import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./features/cocktail/cocktailSlice";
import { Provider } from "react-redux";
import "./App.css";

const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
