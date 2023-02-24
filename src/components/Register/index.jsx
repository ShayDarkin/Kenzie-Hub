import { Link } from "react-router-dom";
import StyledRegister from "./Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const schema = yup

  .object({
    name: yup.string().required("Nome é obrigatorio"),
    email: yup.string().required("Email é Obrigatorio"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "Senha Precisa ser Maior que 6 Caracteres")
      .matches(/(?=.*?[A-Z])/, "Tenha 1 letra maiuscula obrigatoria"),
    bio: yup.string(),

    confirmPassword: yup
      .string()
      .required("Obrigatorio")
      .oneOf([yup.ref("password"), null], "Senha Devem Ser Iguais"),
  })
  .required();

function Register() {
  const { submitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledRegister>
      <div className="div__nav">
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>
          <button className="back">Voltar</button>
        </Link>
      </div>

      <h2>Crie sua conta</h2>
      <span>Rapido e Gratis, vamos nessa</span>

      <form onSubmit={handleSubmit(submitRegister)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu Nome"
            {...register("name")}
          />
          {errors.name?.message}
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Digite seu Email"
          />
          {errors.email?.message}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Digite sua Senha"
          />
          {errors.password?.message}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua Senha"
          />
          {errors.confirmPassword?.message}
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input
            name="bio"
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
        </div>

        <div>
          <label htmlFor="contact">Contato</label>
          <input
            {...register("contact")}
            id="contact"
            type="text"
            placeholder="Opção de contato"
          />
        </div>

        <div>
          <label htmlFor="">Selecionar Modulo</label>
          <select {...register("course_module")} id="course_module">
            <option value="Primeiro Modulo (Front-End Básico)">
              Primeiro Módulo
            </option>
            <option value="Segundo Modulo (Front-End Intermediário)">
              Segundo Módulo
            </option>
            <option value="Terceiro Modulo (Front-End Avançado)">
              Terceiro Módulo
            </option>
          </select>
        </div>

        <button type="submit" className="register">
          Cadastrar
        </button>
      </form>
    </StyledRegister>
  );
}

export default Register;
