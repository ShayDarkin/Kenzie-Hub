import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import CardsTechs from "../CardTech";
import ModalAddTech from "../ModalAddTech";
import ModalChangeTech from "../ModalChangeTech";
import StyledContentHomePage from "./ContentHomePage";

function ContentHomePage() {
  const { modalOpen, setModalOpen, modalChangeOpen } = useContext(TechContext);
  return (
    <StyledContentHomePage>
      {modalOpen && <ModalAddTech />}
      {modalChangeOpen && <ModalChangeTech />}
      <div className="title__content">
        <span>Tecnologias</span>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {""}+
        </button>
      </div>
      <div className="card__container">
        <CardsTechs />
      </div>
    </StyledContentHomePage>
  );
}

export default ContentHomePage;
