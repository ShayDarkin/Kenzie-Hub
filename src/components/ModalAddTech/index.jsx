import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledModalAddTech } from "./ModalAddTech";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    title: yup.string().required("Nome da Tecnologia Obrigatório"),
  })
  .required();

function ModalAddTech() {
  const { setModalOpen, submitTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledModalAddTech>
      <div className="modal__container--inf">
        <div className="div__title--modal">
          <span className="title__modal">Cadastrar Tecnologia</span>
          <button className="close__modal" onClick={() => setModalOpen(false)}>
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(submitTech)}>
          <div className="div__tech">
            <label htmlFor="title">Nome</label>
            <input
              name="title"
              type="text"
              placeholder="Nome da Tecnologia"
              {...register("title")}
            />
            {errors.title?.message}
          </div>

          <div className="div__tech">
            <label htmlFor="status">Selecione o status</label>
            <select name="status" id="status" {...register("status")}>
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
