import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCocktails,
  selectCocktail,
} from "../../features/cocktail/cocktailSlice";
import { CocktailCard } from "../CocktailCard";
import { Loader } from "../Loader";
import "./cocktail_list.scss";

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktails: drinks, loading } = useSelector(selectCocktail);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  return (
    <div className="cocktails-main-div">
      <h1>Cocktail List</h1>
      <div className="cocktails">
        {loading && <Loader />}
        {drinks.length >= 1 &&
          drinks.map((drink, index) => (
            <CocktailCard
              key={index}
              id={drink.idDrink}
              title={drink.strDrink}
              image={drink.strDrinkThumb}
              ingredient1={drink.strIngredient1}
              ingredient2={drink.strIngredient2}
              ingredient3={drink.strIngredient3}
              instructions={drink.strInstructions}
            />
          ))}
      </div>
    </div>
  );
};

export default CocktailList;
