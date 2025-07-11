import { styled } from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding: 90px 20px 100px;
  box-sizing: border-box;
`;

export const HabitsSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    color: #126ba5;
    font-size: 20px;
    font-weight: 400;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52b6ff;
    cursor: pointer;
  }
`;

export const NoHabitsMessage = styled.p`
  font-size: 15px;
  color: #666666;
  margin-top: 20px;
`;

export const HabitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
