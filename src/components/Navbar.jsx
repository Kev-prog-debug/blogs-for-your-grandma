import More from "./More";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ getInput }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <button onClick={() => setToggle(!toggle)}>More</button>
      </div>
      {toggle && <More getInput={getInput} />}
    </nav>
  );
};
export default Navbar;
