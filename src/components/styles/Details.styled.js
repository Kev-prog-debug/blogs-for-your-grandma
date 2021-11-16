import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    padding: 4px;
    word-wrap: break-word;
  }
`;
export const Article = styled.article`
  padding: 15px 15px;
  width: 100%;
  & img {
    width: 80%;
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    padding: 10px 5px;
    & img {
      width: 80%;
      height: 250px;
    }
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 35px;
  line-height: 1.5em;
  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: 500;
    line-height: normal;
  }
`;
export const PublishedDate = styled.p`
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 300;
  }
`;
export const Content = styled.p`
  font-size: 26px;
  line-height: 1.5em;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    padding: 5px;
  }
`;
export const Source = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 5px;
  }
`;
