import React from "react";
import { HomeMenu } from "../components/HomeMenu";
import { CocktailList } from "../components/Cocktails";

import "../styles/globals.scss";

const Home = () => {
  return (
    <>
      <HomeMenu />
      <CocktailList />
    </>
  );
};

export default Home;
