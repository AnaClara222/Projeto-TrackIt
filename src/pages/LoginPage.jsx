import { useContext, useState } from "react";
import appLogo from "../assets/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import { AuthFormWrapper, AuthNavLink } from "../styles/LoginStyle";
import { ThreeDots } from 'react-loader-spinner';

export default function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleLoginSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const requestBody = { email, password };

    axios.post(API_URL, requestBody)
      .then((response) => {
        setCurrentUser(response.data);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/hoje");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Erro ao autenticar usuário:", error);
        if (error.response && error.response.status === 401) {
          alert("Credenciais inválidas. Verifique seu e-mail e senha.");
        } else {
          alert("Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
      });
  }

  return (
    <AuthFormWrapper>
      <img src={appLogo} alt="Logo do aplicativo" />
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="senha"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" disabled={isLoading} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isLoading ? (
            <ThreeDots
              height="40"
              width="40"
              color="#FFFFFF"
              ariaLabel="loading"
              backgroundColor="#52B6FF"
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <AuthNavLink to="/cadastro">Não tem uma conta? Cadastre-se!</AuthNavLink>
    </AuthFormWrapper>
  );
}
