import More from "./More";
import { useState } from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
const Navbar = ({ getInput }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="home">
          <h1>GNA</h1>
        </Link>
        <Weather />
        <button onClick={() => setToggle(!toggle)} className="nav-btn">
          <h5>More</h5>
        </button>
        <Link to="about" className="aboutus">
          <h5>About Us</h5>
        </Link>
      </div>
      {toggle && <More getInput={getInput} />}
    </nav>
  );
};
export default Navbar;
