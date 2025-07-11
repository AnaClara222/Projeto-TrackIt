import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";

import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <AuthContext.Provider value={[token, setToken]}>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HomePage token={token} />} />
            <Route path="/hoje" element={<TodayPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
