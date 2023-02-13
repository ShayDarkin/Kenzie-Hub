import StyledLogin from "./Login";

function Login() {
  return (
    <StyledLogin>
      <h1>Kenzie Hub</h1>

      <h2>Login</h2>

      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite Seu Email Aqui..."
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua Senha..."
        />

        <button className="login" type="submit">
          Entrar
        </button>
      </form>

      <span>Ainda não possui uma conta?</span>
      <button className="register">Cadastre-se</button>
    </StyledLogin>
  );
}

export default Login;
