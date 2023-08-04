import { useLoaderData } from "react-router-dom";
import axios from "axios";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { useQuery } from "@tanstack/react-query";

const recipeSearch = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchRecipeQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${recipeSearch}${searchTerm}`);
      return response.data.meals;
    },
  };
};
// To pre-fetch the data when the page loads
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // when the form gets submitted, the request is made back to the same page and the
    // search term gets retrieved from the URL
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchRecipeQuery(searchTerm));
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchRecipeQuery(searchTerm));
  return (
    <>
      <Search searchTerm={searchTerm} />
      <RecipeList meals={meals} />
    </>
  );
};

export default Landing;
