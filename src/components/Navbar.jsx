import More from "./More";
import { useState } from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import { Nav, Container, NavItem, Button } from "./styles/Navbar.styled";
const Navbar = ({ getInput }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Nav>
        <NavItem>
          <Link to="/">
            <h1>GNA</h1>
          </Link>
        </NavItem>
        <Weather />
        <NavItem>
          <Button onClick={() => setToggle(!toggle)}>More</Button>
          <Link to="/about">
            <h5>About Us</h5>
          </Link>
        </NavItem>
      </Nav>
      {toggle && (
        <More onScroll={() => console.log("SCrolled")} getInput={getInput} />
      )}
    </Container>
  );
};
export default Navbar;
