import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../assets/wrappers/SingleRecipe";
import { useState } from "react";

const singleRecipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const searchSingleRecipe = (id) => {
  return {
    queryKey: ["recipe", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleRecipeUrl}${id}`);
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(searchSingleRecipe(id));
    return { id };
  };
const Recipe = () => {
  const [readMore, setReadMore] = useState(false);
  const { id } = useLoaderData();
  const { data } = useQuery(searchSingleRecipe(id));
  if (!data) {
    return <Navigate to="/" />;
  }
  const singleRecipe = data.meals[0];
  const {
    strMeal: name,
    strMealThumb: image,
    strArea: cuisine,
    strInstructions: instructions,
    strYoutube: video,
  } = singleRecipe;

  console.log(singleRecipe);
  const validIngredients = Object.keys(singleRecipe)
    .reduce((result, key) => {
      if (key.startsWith("strIngredient") && singleRecipe[key] !== "") {
        const ingredientIndex = key.replace("strIngredient", "");
        const measureKey = `strMeasure${ingredientIndex}`;
        if (singleRecipe[measureKey] !== null) {
          result += `${singleRecipe[key]}  (${singleRecipe[measureKey]}),`;
        } else {
          result += singleRecipe[key];
        }
      }
      return result;
    }, "")
    .slice(0, -1);

  console.log(validIngredients);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="meal">
        <img src={image} alt={name} className="img" />
        <div className="meal-info">
          <p>
            <span className="meal-data">Recipe: </span>
            {name}
          </p>
          <p>
            <span className="meal-data">Cuisine: </span>
            {cuisine}
          </p>
          <p>
            <span className="meal-data">Ingredients: </span>
            {validIngredients}
          </p>
          <p>
            <span className="meal-data">Instructions: </span>
            {readMore ? instructions : `${instructions.substring(0, 200)}...`}
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <p>
            <Link to={video}>
              <button type="button" className="btn">
                Watch on Youtube
              </button>
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recipe;
