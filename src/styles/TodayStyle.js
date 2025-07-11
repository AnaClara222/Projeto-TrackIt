import { styled } from "styled-components";

export const TodayPageMessage = styled.p`
  font-size: 18px;
  color: #BABABA;
  margin-top: 10px;
  margin-left: 20px;
`;

export const TodayProgressMessage = styled.p`
  font-size: 18px;
  color: ${(props) => (props.$percentage > 0 ? "#8FC549" : "#BABABA")};
  margin-top: 5px;
  margin-left: 20px;
`;
