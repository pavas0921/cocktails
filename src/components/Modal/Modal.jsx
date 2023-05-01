import React from "react";
import "./modal.scss";

const Modal = ({
  isOpen,
  onClose,
  title,
  image,
  ingredient1,
  ingredient2,
  ingredient3,
  instructions,
}) => {
  return (
    <div className="modal" style={{ display: isOpen ? "grid" : "none" }}>
      <div className="modal-content">
        <h2>{title}</h2>
        <img className="modal-img" src={image} alt={image} />
        <p>
          Ingredients: {ingredient1}, {ingredient2}, {ingredient3}
        </p>
        <p>Instructions: {instructions}</p>
        <button className="modal-btn" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
