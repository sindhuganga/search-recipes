import Wrapper from "../assets/wrappers/RecipeCard";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, category, cuisine, name, image, video }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img"></img>
      </div>
      <div className="footer">
        <h5>{name}</h5>
        <p>{cuisine}</p>
        <Link to={`/recipe/${id}`} className="btn">
          Get Recipe
        </Link>
      </div>
    </Wrapper>
  );
};

export default RecipeCard;
