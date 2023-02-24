import styled from "styled-components";

export const StyledModalAddTech = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(18, 18, 20, 0.5);

  .modal__container--inf {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    background: var(--color-grey-3);
    width: 369px;
    height: 342px;
    margin: 0 auto;
  }

  .div__title--modal {
    width: 92%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px 15px;
    gap: 10px;
    background: var(--color-grey-2);
  }

  .close__modal {
    background: none;
    border: none;
    color: var(--color-grey-1);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
  }

  .div__tech {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
  }

  label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 10px;
    color: var(--color-grey-0);
  }

  input,
  select {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    width: 330px;
    height: 48px;
    color: var(--color-grey-0);
  }

  .add__tech {
    padding: 0px 22px;
    width: 324px;
    height: 48px;
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    font-size: 16px;
  }
`;
