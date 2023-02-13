import styled from "styled-components";

const StyledRegister = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 295px;
  height: 750px;
  padding: 34px 18px;
  background-color: var(--color-grey-3);
  color: var(--color-grey-0);
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);

  .div__nav {
    position: absolute;
    display: flex;
    left: 4px;
    top: -35px;
    color: var(--color-primary);
    font-size: 19px;
    font-weight: 700;
    align-items: center;

    gap: 134px;
  }

  h1 {
    width: 113px;
  }

  .back {
    color: var(--color-grey-0);
    background: var(--color-grey-3);
    border-radius: 4ps;
    padding: 0 16px;
    border-radius: 4px;
    font-size: var(--color-headline);
    height: 32px;
    width: 79px;
    border: 2px solid var(--color-grey-3);
  }

  h2 {
    font-size: var(--color-title-1);
    line-height: 22px;
    font-weight: 700;
  }

  span {
    font-size: var(--color-headline);
    font-weight: 600;
    color: var(--color-grey-1);
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

  input,
  select {
    width: 264px;
    height: 38px;
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    border-radius: 3px;
    padding: 0px 13px;
  }

  .register {
    padding: 0px 22px;
    background: var(--color-primary-negative);
    color: var(--color-grey-0);
    width: 288px;
    height: 38.5px;
    border: 1.2px solid var(--color-primary-negative);
    border-radius: 4px;
    transition: ease-in-out 0.7s;
  }
`;

export default StyledRegister;
