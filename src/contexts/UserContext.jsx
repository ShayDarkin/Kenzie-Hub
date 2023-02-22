import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("@USERID"));
  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  async function submitRegister(data) {
    try {
      await api.post("/users", data);
      toast.success("Cadastro Realizado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Revise os dados e Tente Novamente");
    }
  }

  async function submitLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      const userId = response.data.user.id;
      const token = response.data.token;

      localStorage.setItem("@TOKEN", JSON.stringify(token));
      localStorage.setItem("@USERID", JSON.stringify(userId));
      toast.success("Login Efetuado com sucesso");
      navigate("/homepage");
    } catch (error) {
      toast.error("Ops, algo deu errado");
    }
  }

  return (
    <UserContext.Provider value={{ submitLogin, submitRegister, user, token }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
