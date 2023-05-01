export const getAllCocktails = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};
