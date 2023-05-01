import React, { useState } from "react";
import { Modal } from "../Modal";

import "./cocktail_card.scss";

const CocktailCard = ({
  title,
  image,
  id,
  ingredient1,
  ingredient2,
  ingredient3,
  instructions,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product" onClick={() => setShowModal(true)}>
        <h3>
          {id} {title}
        </h3>
        <img className="product__img" src={image} alt={image} />
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        image={image}
        title={title}
        ingredient1={ingredient1}
        ingredient2={ingredient2}
        ingredient3={ingredient3}
        instructions={instructions}
      />
    </>
  );
};

export default CocktailCard;
