import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HabitCard from "../components/HabitCard";
import HabitForm from "../components/HabitForm";

import {
  HomePageContainer,
  HabitsSectionHeader,
  NoHabitsMessage,
  HabitsList,
} from "../styles/HomeStyle";

import { LoadingSpinner } from "../styles/GeneralStyle";

export default function HomePage({ token }) {
  const [hasNoHabits, setHasNoHabits] = useState(true);
  const [userHabits, setUserHabits] = useState([]);
  const [showAddHabitForm, setShowAddHabitForm] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [selectedDaysForNewHabit, setSelectedDaysForNewHabit] = useState([]);
  const [activeNavButton, setActiveNavButton] = useState("habits");

  const [currentUser] = useContext(UserContext);

  const [isLoadingHabits, setIsLoadingHabits] = useState(true);
  const [isSubmittingHabit, setIsSubmittingHabit] = useState(false);
  const navigate = useNavigate();

  const fetchHabits = () => {
    setIsLoadingHabits(true);
    const API_HABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const authConfig = { headers: { Authorization: `Bearer ${token}` } };
    axios.get(API_HABITS_URL, authConfig)
      .then((response) => {
        setUserHabits(response.data);
        setHasNoHabits(response.data.length === 0);
        setIsLoadingHabits(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar hábitos:", error.response?.data || error);
        setIsLoadingHabits(false);
        if (error.response?.status === 401) {
          alert("Sua sessão expirou. Por favor, faça login novamente.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    fetchHabits();
  }, [token, navigate]);

  useEffect(() => {
    if (window.location.pathname === "/habitos") {
      setActiveNavButton("habits");
    } else if (window.location.pathname === "/hoje") {
      setActiveNavButton("today");
    }
  }, [navigate]);

  const handleHabitDeleted = (deletedHabitId) => {
    const updatedHabits = userHabits.filter(habit => habit.id !== deletedHabitId);
    setUserHabits(updatedHabits);
    setHasNoHabits(updatedHabits.length === 0);
  };

  if (isLoadingHabits) {
    return (
      <LoadingSpinner>
        <ThreeDots height="80" width="80" color="#52B6FF" ariaLabel="loading" />
        <p>Carregando hábitos...</p>
      </LoadingSpinner>
    );
  }

  function handleAddHabitClick() {
    setShowAddHabitForm(true);
  }

  function handleCancelNewHabit() {
  setShowAddHabitForm(false);
  }

  function handleToggleDay(index, event) {
    event.preventDefault();
    setSelectedDaysForNewHabit((prevSelectedDays) => {
      if (prevSelectedDays.includes(index)) {
        return prevSelectedDays.filter((d) => d !== index);
      } else {
        return [...prevSelectedDays, index];
      }
    });
  }

  function navigateToTodayPage() {
    setActiveNavButton("today");
    navigate("/hoje");
  }

  function navigateToHabitsPage() {
    setActiveNavButton("habits");
    navigate("/habitos");
  }

  function handleSaveNewHabit(event) {
    event.preventDefault();

    if (!newHabitName.trim() || selectedDaysForNewHabit.length === 0) {
      alert("Por favor, preencha o nome do hábito e selecione pelo menos um dia.");
      return;
    }

    setIsSubmittingHabit(true);

    const API_CREATE_HABIT_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const authConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const requestBody = {
      name: newHabitName,
      days: selectedDaysForNewHabit,
    };

    axios
      .post(API_CREATE_HABIT_URL, requestBody, authConfig)
      .then((response) => {
        setUserHabits((prevHabits) => [...prevHabits, response.data]);
        setHasNoHabits(false);
        setNewHabitName("");
        setSelectedDaysForNewHabit([]);
        setShowAddHabitForm(false);
      })
      .catch((error) => {
        console.error("Erro ao criar hábito:", error.response?.data || error);
        alert("Ocorreu um erro ao salvar o hábito. Tente novamente!");
        if (error.response?.status === 401) {
          alert("Sua sessão expirou. Por favor, faça login novamente.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }
      })
      .finally(() => {
        setIsSubmittingHabit(false);
      });
  }

  return (
    <HomePageContainer>
      <Header userImage={currentUser?.image} />

      <HabitsSectionHeader>
        <h1>Meus hábitos</h1>
        <button type="button" onClick={handleAddHabitClick} data-test="add-habit-btn">
          +
        </button>
      </HabitsSectionHeader>

      {showAddHabitForm && (
        <HabitForm
          newHabitName={newHabitName}
          setNewHabitName={setNewHabitName}
          weekDays={weekDays}
          selectedDaysForNewHabit={selectedDaysForNewHabit}
          handleToggleDay={handleToggleDay}
          handleCancelNewHabit={handleCancelNewHabit}
          handleSaveNewHabit={handleSaveNewHabit}
          isSubmittingHabit={isSubmittingHabit}
        />
      )}

      <HabitsList>
        {hasNoHabits ? (
          <NoHabitsMessage data-test="no-habits-message">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </NoHabitsMessage>
        ) : (
          userHabits.map((h) => (
            <HabitCard
              key={h.id}
              habitData={h}
              token={token}
              onHabitDeleted={handleHabitDeleted}
            />
          ))
        )}
      </HabitsList>

      <Footer
        activeButton={activeNavButton}
        onNavigateToday={navigateToTodayPage}
        onNavigateHabits={navigateToHabitsPage}
      />
    </HomePageContainer>
  );
}
