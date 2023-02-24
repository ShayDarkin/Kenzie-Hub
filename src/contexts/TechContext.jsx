import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechContext = createContext({});

function TechContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  async function submitTech(data) {
    try {
      //api.post("/users/techs", data);
      console.log(data);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      toast.error("Ops,Algo deu errado");
    }
  }

  return (
    <TechContext.Provider value={{ modalOpen, setModalOpen, submitTech }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechContextProvider;
