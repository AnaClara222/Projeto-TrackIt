import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { ThreeDots } from "react-loader-spinner";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HabitToday from "../components/HabitToday";

import { HomePageContainer, HabitsSectionHeader } from "../styles/HomeStyle";
import { LoadingSpinner } from "../styles/GeneralStyle";
import { TodayPageMessage } from "../styles/TodayStyle";

import AuthContext from "../context/AuthContext";
import UserContext from "../context/UserContext";

export default function TodayPage() {
  const [habitsToday, setHabitsToday] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [token] = useContext(AuthContext);
  const [currentUser] = useContext(UserContext);

  const todayDate = dayjs().locale("pt-br").format("dddd, DD/MM");

  const [activeNavButton, setActiveNavButton] = useState("today");
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    fetchTodayHabits(true);
  }, [token, navigate]);

  const fetchTodayHabits = (activateSpinner = false) => {
    if (activateSpinner) {
      setIsLoading(true);
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(URL, config)
      .then((res) => {
        setHabitsToday(res.data);
      })
      .catch((err) => {
        console.error("Erro ao carregar hábitos de hoje:", err.response?.data || err);
        if (err.response?.status === 401) {
          alert("Sua sessão expirou. Por favor, faça login novamente.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }
      })
      .finally(() => {
        if (activateSpinner) {
          setIsLoading(false);
        }
      });
  };

  const handleHabitToggleDone = () => {
    setTimeout(() => {
      fetchTodayHabits(false);
    }, 50);
  };

  function navigateToHabitsPage() {
    setActiveNavButton("habits");
    navigate("/habitos");
  }

  function navigateToTodayPage() {
    setActiveNavButton("today");
    navigate("/hoje");
  }

  if (isLoading) {
    return (
      <LoadingSpinner>
        <ThreeDots height="80" width="80" color="#52B6FF" ariaLabel="loading" />
        <p>Carregando hábitos de hoje...</p>
      </LoadingSpinner>
    );
  }

  return (
    <HomePageContainer>
      <Header userImage={currentUser?.image} />
      <HabitsSectionHeader style={{ marginTop: "10px", marginBottom: "5px" }}>
        <h1>{todayDate.charAt(0).toUpperCase() + todayDate.slice(1)}</h1>
      </HabitsSectionHeader>

      {habitsToday.length === 0 ? (
        <TodayPageMessage style={{ marginTop: "20px", fontSize: "15px", color: "#666666" }}>
          Você não tem nenhum hábito cadastrado para hoje!
        </TodayPageMessage>
      ) : (
        habitsToday.map((habit) => (
          <HabitToday
            key={habit.id}
            habit={habit}
            token={token}
            onHabitToggleDone={handleHabitToggleDone}
          />
        ))
      )}

      <Footer
        activeButton={activeNavButton}
        onNavigateToday={navigateToTodayPage}
        onNavigateHabits={navigateToHabitsPage}
      />
    </HomePageContainer>
  );
}
