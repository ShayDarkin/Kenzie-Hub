import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StyledLogin from "./Login";

const schema = yup
  .object({
    email: yup.string().required("Email é Obrigatório"),
    password: yup.string().required("Senha deve ser obrigatório"),
  })
  .required();

function Login() {
  const { submitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledLogin>
      <h1>Kenzie Hub</h1>

      <h2>Login</h2>

      <form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite Seu Email Aqui..."
            {...register("email")}
          />
          {errors.email?.message}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua Senha..."
            {...register("password")}
          />
          {errors.password?.message}
        </div>

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
