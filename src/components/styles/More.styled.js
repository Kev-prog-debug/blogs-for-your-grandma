import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
`;
export const Form = styled.form`
  & input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    font-size: 18px;
    height: 34px;
    border: none;
    padding: 0 14px;
    border-radius: 4px;
  }
  & button {
    border-radius: 5px;
    border: none;
    width: 90px;
    height: 30px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
  }
`;
export const Categories = styled.div`
  margin: 5px 0;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & a {
    display: block;
    text-decoration: none !important;
    color: rgba(0, 0, 0, 9);
    background-color: burlywood;
    text-align: center;
    margin: 5px 0;
    padding: 5px;
    width: 50%;
    border-radius: 20px;
    box-shadow: -2px -2px 11px -2px rgba(0, 0, 0, 0.73);
    -webkit-box-shadow: -2px -2px 11px -2px rgba(0, 0, 0, 0.73);
    -moz-box-shadow: -2px -2px 11px -2px rgba(0, 0, 0, 0.73);
    transition-duration: 0.9ms;
    transition-timing-function: linear;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
      width: 55%;
      box-shadow: -2px -2px 12px 2px rgba(0, 0, 0, 0.67);
      -webkit-box-shadow: -2px -2px 12px 2px rgba(0, 0, 0, 0.67);
      -moz-box-shadow: -2px -2px 12px 2px rgba(0, 0, 0, 0.67);
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }
`;
