import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 400;
  }
`;
export const Article = styled.article`
  padding: 15px 10px;
  width: 100%;
  & img {
    width: 80%;
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 80%;
      height: 250px;
    }
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 35px;
  line-height: 1.5em;
`;
export const PublishedDate = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
export const Content = styled.p`
  font-size: 28px;
  line-height: 1.5em;
  font-weight: 500;
`;
export const Source = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
`;
