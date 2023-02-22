import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import StyledContentHomePage from "./ContentHomePage";

function ContentHomePage() {
  const { handleModal } = useContext(TechContext);
  return (
    <StyledContentHomePage>
      <span>Tecnologias</span>
      <button onClick={handleModal}>+</button>
    </StyledContentHomePage>
  );
}

export default ContentHomePage;
