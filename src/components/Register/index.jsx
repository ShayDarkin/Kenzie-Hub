import { Link, useNavigate } from "react-router-dom";
import StyledRegister from "./Register";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function submit(data) {
    console.log(data);

    try {
      await api.post("/users", data);
      toast.success("Cadastro Realizado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  }

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

      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          {...register("name")}
        />

        <label htmlFor="">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Digite seu Email"
        />

        <label htmlFor="password">Senha</label>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Digite sua Senha"
        />

        {/*<label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="text"
          placeholder="Confirme sua Senha"
        /> */}

        <label htmlFor="bio">Bio</label>
        <input
          name="bio"
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />

        <label htmlFor="contact">Contato</label>
        <input
          {...register("contact")}
          id="contact"
          type="text"
          placeholder="Opção de contato"
        />

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

        <button type="submit" className="register">
          Cadastrar
        </button>
      </form>
    </StyledRegister>
  );
}

export default Register;
