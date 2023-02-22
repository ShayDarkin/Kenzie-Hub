import { createContext, useState } from "react";

export const TechContext = createContext({});

function TechContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    console.log("passei aqui");
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <TechContext.Provider value={{ handleModal, closeModal, modalOpen }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechContextProvider;
