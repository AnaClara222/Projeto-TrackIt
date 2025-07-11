import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import appLogo from "../assets/Logo.png";
import { AuthFormWrapper, AuthNavLink } from "../styles/LoginStyle";
import { ThreeDots } from 'react-loader-spinner';

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUpSubmit(event) {
    event.preventDefault();

    if (!email || !password || !name || !image) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const requestBody = { email, password, name, image };

    axios.post(API_URL, requestBody)
      .then((response) => {
        console.log("Cadastro realizado com sucesso:", response.data);
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Erro ao tentar cadastrar:", error);
        if (error.response && error.response.status === 409) {
          alert("Este e-mail já está cadastrado. Tente outro.");
        } else {
          alert("Não foi possível realizar o cadastro. Verifique sua conexão ou tente novamente.");
        }
      });
  }

  return (
    <AuthFormWrapper>
      <img src={appLogo} alt="Logo do aplicativo" />
      <form onSubmit={handleSignUpSubmit}>
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
        <input
          type="text"
          placeholder="nome"
          value={name}
          disabled={isLoading}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="url"
          placeholder="foto"
          value={image}
          disabled={isLoading}
          onChange={(e) => setImage(e.target.value)}
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
            "Cadastrar"
          )}
        </button>
      </form>
      <AuthNavLink to="/">Já tem uma conta? Faça login!</AuthNavLink>
    </AuthFormWrapper>
  );
}
