import { styled } from "styled-components";

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  font-size: 16px;
  color: #666;
  background-color: #f2f2f2;

  p {
    margin-top: 10px;
  }
`;
