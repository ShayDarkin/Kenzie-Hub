import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";
export const TechContext = createContext({});

function TechContextProvider({ children }) {
  const { token } = useContext(UserContext);
  const localStorageKey = localStorage.getItem("@TECHS");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChangeOpen, setModalChangeOpen] = useState(false);
  const [techs, setTechs] = useState(
    localStorageKey ? JSON.parse(localStorageKey) : []
  );

  useEffect(() => {
    localStorage.setItem("@TECHS", JSON.stringify(techs));
  }, [techs]);

  async function submitTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTechs([...techs, response.data]);
      setModalOpen(false);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      toast.error("Ops,Algo deu errado");
    }
  }

  async function removeTech(id) {
    try {
      await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tech deletada com sucesso!");
      const filteredTechs = techs.filter((tech) => tech.id !== id);
      setTechs(filteredTechs);
    } catch (error) {
      toast.error("Algo deu errado no delete");
    }
  }

  async function updateTech(data, id) {
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tech Atualizada com sucesso");
    } catch (error) {
      toast.error("Algo deu errado na Atualização");
    }
  }

  return (
    <TechContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        submitTech,
        removeTech,
        modalChangeOpen,
        setModalChangeOpen,
        updateTech,
        techs,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechContextProvider;
