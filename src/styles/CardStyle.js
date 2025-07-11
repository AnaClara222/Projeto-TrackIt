import { styled } from "styled-components";

export const HabitCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  position: relative;
  min-height: 90px;

  h2 {
    font-size: 18px;
    color: #666;
    margin-bottom: 8px;
    word-break: break-word;
  }

  & .DaysContainer {
    margin-top: 10px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  & .DeleteIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 0;
  }
`;

export const DayButton = styled.span`
  width: 31px;
  height: 31px;
  background-color: ${(props) => (props.$isSelected ? "#CFCFcf" : "#FFFFFF")};
  color: ${(props) => (props.$isSelected ? "#FFFFFF" : "#DBDBDB")};
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
