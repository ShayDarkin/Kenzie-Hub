import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledModalAddTech } from "./ModalAddTech";

function ModalAddTech() {
  const { setModalOpen } = useContext(TechContext);
  return (
    <StyledModalAddTech>
      <div className="modal__container--inf">
        <div className="div__title--modal">
          <span className="title__modal">Cadastrar Tecnologia</span>
          <button className="close__modal" onClick={() => setModalOpen(false)}>
            X
          </button>
        </div>

        <form>
          <div className="div__tech">
            <label htmlFor="tech">Nome</label>
            <input name="tech" type="text" placeholder="Nome da Tecnologia" />
          </div>

          <div className="div__tech">
            <label htmlFor="status">Selecione o status</label>
            <select name="status" id="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediario</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit" className="add__tech">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </StyledModalAddTech>
  );
}

export default ModalAddTech;
