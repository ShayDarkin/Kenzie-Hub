import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { StyledChangeModal } from "./ModalChangeTech";

const schema = yup
  .object({
    status: yup.string().required("Tecnologia Obrigatória"),
  })
  .required();

function ModalChangeTech() {
  const { setModalChangeOpen, removeTech, updateTech, select } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledChangeModal>
      <div className="change--inf">
        <div className="modalChange__title--modal">
          <span className="title__modalChange">Atualizar Tecnologia</span>
          <button
            className="close__modalChange"
            onClick={() => setModalChangeOpen(false)}
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(updateTech)}>
          <div className="div__techChange">
            <label htmlFor="title">Nome</label>
            <input
              name="title"
              type="text"
              placeholder="Nome da Tecnologia"
              disabled
              value={select.title}
            />
          </div>

          <div className="div__techChange">
            <label htmlFor="status">Selecione o status</label>
            <select name="status" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediario</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="div__buttons">
            <button type="submit" className="change__tech">
              Salvar Alterações
            </button>
            <button
              type="delete"
              className="delete__tech"
              onClick={() => removeTech()}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledChangeModal>
  );
}

export default ModalChangeTech;
