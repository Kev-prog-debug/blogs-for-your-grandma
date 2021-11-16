import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 24px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    h5,
    img,
    p {
      position: absolute;
      opacity: 0;
    }
  }
`;
