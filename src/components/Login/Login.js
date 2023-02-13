import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  height: 482px;
  gap: 33px;
  background-color: var(--color-grey-3);
  padding: 33px 17px;
  color: var(--color-grey-0);
  position: relative;
  border-radius: 4px;

  h1 {
    position: absolute;
    left: 109px;
    top: -30px;
    color: var(--color-primary);
    font-size: 19px;
    font-weight: 700;
  }

  h2 {
    font-size: var(--color-title-1);
    line-height: 22px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 21px;
    align-items: baseline;
  }

  label {
    font-size: var(--color-headline);
    font-weight: 400;
  }

  input {
    width: 264px;
    height: 38px;
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    border-radius: 3px;
    padding: 0px 13px;
  }

  .login {
    width: 288px;
    height: 38.5px;
    border: 1.2px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-radius: 4px;
    transition: ease-in-out 0.7s;
  }

  span {
    font-size: var(--color-headline);
    font-weight: 600;
    color: var(--color-grey-1);
  }

  .register {
    padding: 0px 22px;
    background: var(--color-grey-1);
    color: var(--color-grey-0);
    width: 288px;
    height: 38.5px;
    border: 1.2px solid var(--color-grey-1);
    border-radius: 4px;
    transition: ease-in-out 0.7s;
  }

  .login:hover {
    background-color: var(--color-primary-negative);
    transform: scale(1.1);
  }

  .register:hover {
    transform: scale(1.1);
  }
`;

export default StyledLogin;
