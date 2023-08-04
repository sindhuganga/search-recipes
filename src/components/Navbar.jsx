import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          <GiKnifeFork />
          Delicious
        </span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
