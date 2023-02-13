import { Link } from "react-router-dom";
import StyledRegister from "./Register";

function Register() {
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

      <form>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Digite seu Nome"
        />

        <label htmlFor="">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Digite seu Email"
        />

        <label htmlFor="password">Senha</label>
        <input
          name="password"
          id="password"
          type="text"
          placeholder="Digite sua Senha"
        />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          name="confirmPassword"
          id="confirmPassword"
          type="text"
          placeholder="Confirme sua Senha"
        />

        <label htmlFor="bio">Bio</label>
        <input name="bio" id="bio" type="text" placeholder="Fale sobre você" />

        <label htmlFor="contact">Contato</label>
        <input
          name="contact"
          id="contact"
          type="text"
          placeholder="Opção de contato"
        />

        <label htmlFor="">Selecionar Modulo</label>
        <select name="course_module" id="course_module">
          <option value="moduloOne">Primeiro Módulo</option>
          <option value="moduloSecond">Segundo Módulo</option>
          <option value="moduloTrird">Terceiro Módulo</option>
        </select>

        <button className="register">Cadastrar</button>
      </form>
    </StyledRegister>
  );
}

export default Register;
