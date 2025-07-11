import React from 'react';
import { FooterContainer } from '../styles/FooterStyle';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { styled } from "styled-components";

export default function Footer({ activeButton, onNavigateToday, onNavigateHabits }) {
  const todayProgress = 60; 

  const habitsIsActive = activeButton === "habits";
  const todayIsActive = activeButton === "today"; 

  const activeBgColor = "#52B6FF";
  const inactiveBgColor = "#FFFFFF";
  const activeTextColor = "#FFFFFF";
  const inactiveTextColor = "#D4D4D4"; 
  const inactiveIconColor = "#DBDBDB";

  return (
    <FooterContainer>
      <button
        onClick={onNavigateHabits}
        style={{
          backgroundColor: habitsIsActive ? activeBgColor : inactiveBgColor,
          color: habitsIsActive ? activeTextColor : inactiveTextColor,
        }}
        data-test="habit-link"
      >
        <CalendarMonthIcon style={{ color: habitsIsActive ? activeTextColor : inactiveIconColor, fontSize: '25px' }} />
        Hábitos
      </button>

      <button
        onClick={onNavigateToday}
        style={{
          backgroundColor: todayIsActive ? activeBgColor : inactiveBgColor,
          color: todayIsActive ? activeTextColor : inactiveTextColor,
        }}
      >
        <EventAvailableIcon style={{ color: todayIsActive ? activeTextColor : inactiveIconColor, fontSize: '25px' }} />
        Hoje
      </button>
      
    </FooterContainer>
  );
}

const CircularProgressBarContainer = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
