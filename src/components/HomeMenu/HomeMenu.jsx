import React from "react";
import { useNavigate } from "react-router";
import "./home_menu.scss";

const HomeMenu = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <div className="main__nav">
        <button onClick={goToHome} className="main____buttons">
          Home
        </button>
      </div>
    </div>
  );
};

export default HomeMenu;
