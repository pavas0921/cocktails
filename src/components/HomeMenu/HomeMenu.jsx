import React from "react";
import { useNavigate } from "react-router";
import "./home_menu.scss";

const HomeMenu = () => {
  const navigate = useNavigate();

  const goToCocktails = () => {
    navigate("/cocktails");
  };

  return (
    <div className="main">
      <div className="main__nav">
        <button onClick={goToCocktails} className="main____buttons">
          See all Cocktails
        </button>
      </div>
    </div>
  );
};

export default HomeMenu;
