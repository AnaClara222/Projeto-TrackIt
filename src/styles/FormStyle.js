import { styled } from "styled-components";

export const BoxHabitContainer = styled.div`
  background-color: white;
  height: 180px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

    input {
      width: calc(100% - 20px);
      height: 45px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 16px;
      margin-top: 10px;
      box-sizing: border-box;

      &::placeholder {
        color: #d4d4d4;
      }

      &:disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
      }
    }

    .ButtonBox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
      align-items: flex-start;
      gap: 5px;
    }

    .FinalButton {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      gap: 10px;
    }
  }
`;

export const DayButton = styled.button`
  width: 31px;
  height: 31px;
  background-color: ${(props) => (props.$isSelected ? "#CFCFcf" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "#d4d4d4")};
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ActionButton = styled.button`
  width: 84px;
  height: 35px;
  border-radius: 5px;
  background-color: ${(props) => (props.$isCancel ? "white" : "#52b6ff")};
  color: ${(props) => (props.$isCancel ? "#52B6FF" : "white")};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
