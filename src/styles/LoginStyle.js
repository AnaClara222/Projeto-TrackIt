import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const AuthFormWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 100vh; 
  padding-top: 80px; 

  img {
    width: 180px;
    height: 178px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;

    &::placeholder {
      color: #d4d4d4;
    }

    &:disabled {
      background-color: #f2f2f2;
      color: #afafaf;
      cursor: not-allowed;
    }
  }

  button {
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer; 
    &:disabled {
      opacity: 0.7; 
      cursor: not-allowed;
    }
  }
`;

export const AuthNavLink = styled(Link)`
  margin-top: 20px;
  font-size: 13px;
  color: #52B6FF;
  margin-bottom: 30px; 
  &:hover {
    text-decoration: underline;
  }
`;
