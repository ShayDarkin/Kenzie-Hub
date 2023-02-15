import api from "../../services/api";
import StyledHomePage from "./HomePage";

function HomePage() {
  async function getUser() {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.get("/profile", token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  getUser();
  return (
    <StyledHomePage>
      <div>
        <h3>Olá, 'Nome'</h3>
        <span>Primeiro módulo ( introdução ao Front End) </span>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
