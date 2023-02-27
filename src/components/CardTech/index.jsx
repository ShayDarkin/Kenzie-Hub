import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { StyledCard } from "./CardTech";
function CardsTechs() {
  const { removeTech, setModalChangeOpen, techs } = useContext(TechContext);
  return (
    <StyledCard>
      <ul className="container__cards">
        {techs.length > 0 ? (
          techs.map((tech) => (
            <li key={tech.id}>
              <span>{tech.title}</span>
              <div>
                <span className="status__tech">{tech.status}</span>
                <button
                  className="delete__button"
                  onClick={() => removeTech(tech.id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="change__button"
                  onClick={() => setModalChangeOpen(true)}
                >
                  <FaPencilAlt />
                </button>
              </div>
            </li>
          ))
        ) : (
          <div>
            <span>Você não possui Tecnologias,</span>
            <span>adicione clicando no botão '+'</span>
          </div>
        )}
      </ul>
    </StyledCard>
  );
}

export default CardsTechs;
