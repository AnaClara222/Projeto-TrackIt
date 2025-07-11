import { styled } from "styled-components";

export const HabitTodayContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 13px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
  position: relative;

  .habit-info {
    h3 {
      font-size: 20px;
      color: #666666;
      margin-bottom: 7px;
      word-break: break-word;
    }

    p {
      font-size: 13px;
      color: #666666;
      line-height: 1.2;
    }

    .done-sequence {
      color: #8FC549;
    }
  }
`;

export const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.$isDone ? "#8FC549" : "#EBEBEB")};
  border: 1px solid ${(props) => (props.$isDone ? "#8FC549" : "#E7E7E7")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;
