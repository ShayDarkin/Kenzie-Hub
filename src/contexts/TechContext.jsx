import { createContext, useState } from "react";

export const TechContext = createContext({});

function TechContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TechContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechContextProvider;
