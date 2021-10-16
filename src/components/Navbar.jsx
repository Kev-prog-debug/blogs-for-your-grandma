import More from "./More";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <h1>Navbar</h1>
        <button onClick={() => setToggle(!toggle)}>More</button>
      </div>
      {toggle && <More />}
    </nav>
  );
};
export default Navbar;
