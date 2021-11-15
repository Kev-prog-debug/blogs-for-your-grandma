import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: 30px;
  text-decoration: none;
  background-color: white;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const PageTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
`;
export const Article = styled.article`
  display: inline-block;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  border: 2px solid black;
  padding: 8px 5px;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.025);
    box-shadow: 2px 4px 18px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 4px 18px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 18px 0px rgba(0, 0, 0, 0.75);
  }
  & h3 {
    text-align: center;
  }
  & img {
    width: 220px;
    height: 180px;
    border-radius: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  & h4 {
    margin: 20px;
  }
`;
