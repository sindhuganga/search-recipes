import Wrapper from "../assets/wrappers/RecipeList";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ meals }) => {
  if (!meals) {
    return <h4 style={{ textAlign: "center" }}>No matching recipes found</h4>;
  }

  const recipes = meals.map((meal) => {
    const { idMeal, strCategory, strArea, strMeal, strMealThumb, strYoutube } =
      meal;
    return {
      id: idMeal,
      category: strCategory,
      cuisine: strArea,
      name: strMeal,
      image: strMealThumb,
      video: strYoutube,
    };
  });
  return (
    <Wrapper>
      {recipes.map((item) => {
        return <RecipeCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default RecipeList;
