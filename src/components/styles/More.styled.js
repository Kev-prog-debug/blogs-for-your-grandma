import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
`;
export const Form = styled.form`
  & input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 34px;
    border: none;
    padding: 0 14px;
    border-radius: 4px;
  }
  & button {
    border-radius: 20px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
  }
`;
export const Categories = styled.div`
  margin: 10px 0;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & a {
    display: block;
    text-decoration: none !important;
    color: rgba(0, 0, 0, 9);
    &:hover {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;
