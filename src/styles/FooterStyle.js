import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100vw;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.15);
  z-index: 100;

  button {
    height: 100%;
    flex-grow: 1;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    img {
      width: 25px;
      height: 25px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
