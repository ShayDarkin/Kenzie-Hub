import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import StyledLogin from "./Login";

function Login() {
  const { submitLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

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
