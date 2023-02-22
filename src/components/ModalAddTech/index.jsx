import { useContext } from "react";
import Modal from "react-modal";
import { TechContext } from "../../contexts/TechContext";

Modal.setAppElement("#root");

function ModalAddTech() {
  const { closeModal, modalOpen } = useContext(TechContext);
  /*   const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  } */

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
    },
  };
  return (
    <Modal isOpen={modalOpen} onRequestClose={closeModal}>
      <span className="title__modal">Cadastrar Tecnologia</span>
      <span className="close__modal" onClick={closeModal}>
        X
      </span>
      <div>
        <label htmlFor="tech">Nome</label>
        <input name="tech" type="text" placeholder="Nome da Tecnologia" />
      </div>

      <div>
        <label htmlFor="status">Selecione o status</label>
        <select name="status" id="status">
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
    </Modal>
  );
}

export default ModalAddTech;
