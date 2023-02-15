import { useNavigate } from "react-router-dom";
import StyledHeader from "./Header";

function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  }
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      <button onClick={logout} className="logout">
        Sair
      </button>
    </StyledHeader>
  );
}

export default Header;
