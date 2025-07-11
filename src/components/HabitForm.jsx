import React from 'react';
import { ThreeDots } from "react-loader-spinner";
import { BoxHabitContainer, DayButton, ActionButton } from '../styles/FormStyle';

export default function HabitForm({
  newHabitName,
  setNewHabitName,
  weekDays,
  selectedDaysForNewHabit,
  handleToggleDay,
  handleCancelNewHabit,
  handleSaveNewHabit,
  isSubmittingHabit
}) {

  return (
    <BoxHabitContainer>
      <form onSubmit={handleSaveNewHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={newHabitName}
          disabled={isSubmittingHabit}
          onChange={(e) => setNewHabitName(e.target.value)}
          data-test="habit-name-input"
        />
        <div className="ButtonBox">
          {weekDays.map((day, index) => (
            <DayButton
              key={index}
              $isSelected={selectedDaysForNewHabit.includes(index)}
              onClick={(e) => handleToggleDay(index, e)}
              disabled={isSubmittingHabit}
              data-test="habit-day"
            >
              {day}
            </DayButton>
          ))}
        </div>

        <div className="FinalButton">
          <ActionButton
            type="button"
            onClick={handleCancelNewHabit}
            disabled={isSubmittingHabit}
            $isCancel={true}
            data-test="habit-cancel-btn"
          >
            Cancelar
          </ActionButton>
          <ActionButton
            type="submit"
            disabled={isSubmittingHabit}
            data-test="habit-save-btn"
          >
            {isSubmittingHabit ? (
              <ThreeDots
                height="40"
                width="40"
                color="#FFFFFF"
                ariaLabel="loading"
              />
            ) : (
              "Salvar"
            )}
          </ActionButton>
        </div>
      </form>
    </BoxHabitContainer>
  );
}
