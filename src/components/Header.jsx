import { useContext } from "react";
import TrackIt from "../assets/TrackIt.png";
import UserContext from "../context/UserContext";
import { AppHeaderContainer } from "../styles/HeaderStyle";

export default function Header() {
  const [currentUser] = useContext(UserContext);

  return (
    <AppHeaderContainer>
      <img src={TrackIt} alt="Logo do TrackIt" />
      {currentUser && currentUser.image && (
        <img
          src={currentUser.image}
          alt="Foto de perfil do usuário"
          style={{ width: "51px", height: "51px", borderRadius: "30px", objectFit: "cover" }}
        />
      )}
    </AppHeaderContainer>
  );
}
