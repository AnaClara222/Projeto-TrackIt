import { styled } from "styled-components";

export const AppHeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;
