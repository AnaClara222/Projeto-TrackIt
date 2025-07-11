import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HabitTodayContainer, CheckBox } from '../styles/HabitTodayStyle';
import CheckIcon from '@mui/icons-material/Check';

export default function HabitToday({ habit, token, onHabitToggleDone }) {
  const [isDone, setIsDone] = useState(habit.done);
  const [currentSeq, setCurrentSeq] = useState(habit.currentSequence);
  const [highestSeq, setHighestSeq] = useState(habit.highestSequence);

  useEffect(() => {
    setIsDone(habit.done);
    setCurrentSeq(habit.currentSequence);
    setHighestSeq(habit.highestSequence);
  }, [habit]);

  const handleToggleDone = () => {
    const action = isDone ? 'uncheck' : 'check';
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${action}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post(URL, {}, config)
      .then((res) => {
        setIsDone(res.data.done);
        setCurrentSeq(res.data.currentSequence);
        setHighestSeq(res.data.highestSequence);
        onHabitToggleDone();
      })
      .catch((err) => {
        console.error(`Erro ao ${action} hábito:`, err.response?.data || err);
        alert("Ocorreu um erro ao atualizar o hábito. Tente novamente.");
      });
  };

  return (
    <HabitTodayContainer data-test="today-habit-container">
      <div className="habit-info">
        <h3 data-test="today-habit-name">{habit.name}</h3>
        <p data-test="today-habit-sequence">
          Sequência atual:{" "}
          <span className={isDone ? 'done-sequence' : ''}>
            {currentSeq || 0} dias
          </span>
        </p>
        <p data-test="today-habit-record">
          Seu recorde:{" "}
          <span className={(isDone && currentSeq === highestSeq && highestSeq > 0) ? 'done-sequence' : ''}>
            {highestSeq || 0} dias
          </span>
        </p>
      </div>
      <CheckBox $isDone={isDone} onClick={handleToggleDone} data-test="today-habit-check-btn">
        <CheckIcon style={{ fontSize: '35px', color: '#FFFFFF' }} />
      </CheckBox>
    </HabitTodayContainer>
  );
}
