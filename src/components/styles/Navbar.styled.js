import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 2px solid black;
  @media (max-width: 768px) {
    & h5 {
      font-size: 15px;
      font-weight: 200px;
    }
    padding-right: 30px;
  }
`;
export const Container = styled.div`
  width: 100%;
`;
export const NavItem = styled.div`
  display: inline-block;
  & h1 {
    display: inline-block;
    margin: 0 15px;
    color: rgba(0, 0, 0, 9);
    font-size: 48px;
    font-weight: 500;
    padding: 5px 20px;
  }
  & h5 {
    display: inline-block;
    margin: 0 15px;
    color: rgba(0, 0, 0, 9);
    font-size: 20px;
    font-weight: 500;
    padding: 5px 20px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
      border-radius: 20px;
      color: rgba(0, 0, 0.06, 9);
    }
  }
  & Link {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    Button {
      font-size: 15px;
      font-weight: 400;
    }
    h5 {
      display: inline-block;
      font-size: 15px;
      font-weight: 400;
      margin: 0;
      padding: 2px 5px;
      margin-right: 30px;
    }
    h1 {
      font-size: 25px;
      font-weight: 500;
      margin: 0;
      padding: 2px 5px;
    }
  }
`;
export const Button = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 500;
  padding: 5px 20px;
  border-radius: 25px;
  background-color: rgb(197, 194, 194);
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0.06, 9);
  }
`;
