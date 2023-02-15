import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import StyledLogin from "./Login";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
      toast.error(error.message);
    }
  }
  return (
    <StyledLogin>
      <h1>Kenzie Hub</h1>

      <h2>Login</h2>

      <form onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite Seu Email Aqui..."
          {...register("email")}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua Senha..."
          {...register("password")}
        />

        <button className="login" type="submit">
          Entrar
        </button>
      </form>

      <span>Ainda não possui uma conta?</span>
      <Link to={"/register"}>
        <button className="register">Cadastre-se</button>
      </Link>
    </StyledLogin>
  );
}

export default Login;
