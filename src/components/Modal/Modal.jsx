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
        <div className="modal-title">
          <h2>{title}</h2>
        </div>
        <div className="div-modal-img">
          <img className="modal-img" src={image} alt={image} />
        </div>
        <div className="div-modal-text">
          <p>
            Ingredients: {ingredient1}, {ingredient2}, {ingredient3}
          </p>
          <p>Instructions: {instructions}</p>
        </div>
        <div className="div-modal-btn">
          <button className="modal-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
