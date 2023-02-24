import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import ModalAddTech from "../ModalAddTech";
import StyledContentHomePage from "./ContentHomePage";

function ContentHomePage() {
  const { modalOpen, setModalOpen } = useContext(TechContext);
  console.log(modalOpen);
  return (
    <StyledContentHomePage>
      <span>Tecnologias</span>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {""}+
      </button>
      {modalOpen && <ModalAddTech />}
    </StyledContentHomePage>
  );
}

export default ContentHomePage;
