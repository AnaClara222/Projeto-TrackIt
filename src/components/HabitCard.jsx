import React from 'react';
import axios from 'axios';
import { HabitCardContainer, DayButton } from '../styles/CardStyle';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function HabitCard({ habitData, token, onHabitDeleted }) {
  const { id, name, days } = habitData;
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const handleDeleteHabit = () => {
    if (window.confirm("Você realmente quer apagar este hábito?")) {
      const DELETE_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.delete(DELETE_URL, config)
        .then(() => {
          alert("Hábito excluído com sucesso!");
          onHabitDeleted(id);
        })
        .catch((error) => {
          console.error("Erro ao deletar hábito:", error.response?.data || error);
          alert("Erro ao excluir o hábito. Tente novamente.");
        });
    }
  };

  return (
    <HabitCardContainer data-test="habit-container">
      <h2 data-test="habit-name">{name}</h2>
      <div className="DaysContainer">
        {weekDays.map((day, index) => (
          <DayButton
            key={index}
            $isSelected={days.includes(index)}
            data-test="habit-day"
          >
            {day}
          </DayButton>
        ))}
      </div>
      <div className="DeleteIcon" onClick={handleDeleteHabit} data-test="habit-delete-btn">
        <DeleteOutlinedIcon style={{ fontSize: '20px', color: '#666666' }} />
      </div>
    </HabitCardContainer>
  );
}
