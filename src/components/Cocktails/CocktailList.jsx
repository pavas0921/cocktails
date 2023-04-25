import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCocktails,
  selectCocktail,
} from "../../features/cocktail/cocktailSlice";

function App() {
  const dispatch = useDispatch();
  const { drinks, loading } = useSelector(selectCocktail);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h2>{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          <p>{drink.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
