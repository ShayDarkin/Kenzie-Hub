import TechContextProvider from "./TechContext";
import UserProvider from "./UserContext";

function ProvidersGlobal({ children }) {
  return (
    <UserProvider>
      <TechContextProvider>{children}</TechContextProvider>
    </UserProvider>
  );
}

export default ProvidersGlobal;
