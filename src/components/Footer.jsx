import React from 'react';
import { FooterContainer } from '../styles/FooterStyle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


export default function Footer({ activeButton, onNavigateToday, onNavigateHabits }) {

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

