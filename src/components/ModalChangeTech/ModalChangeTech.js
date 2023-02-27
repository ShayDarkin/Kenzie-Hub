import styled from "styled-components";

export const StyledChangeModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(18, 18, 20, 0.5);
  .change--inf {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    background: var(--color-grey-3);
    width: 369px;
    height: 342px;
    margin: 247px auto;
  }

  .modalChange__title--modal {
    width: 92%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px 15px;
    gap: 10px;
    background: var(--color-grey-2);
  }

  .close__modalChange {
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

  .div__techChange {
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

  .div__buttons {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .change__tech {
    background: var(--color-primary-negative);
    border-radius: 4px;
    border: 1.2px px solid var(--color-primary-negative);
    width: 202px;
    height: 48px;
  }

  .delete__tech {
    width: 98px;
    height: 48px;
    background: var(--color-grey-1);
    border: 1.2px solid var(--color-grey-1);
  }

  @media (max-width: 789px) {
    .modalChange__title--modal {
      width: 89%;
    }
    .change--inf {
      width: 281px;
    }

    input,
    select {
      width: 255px;
    }

    .change__tech {
      width: 163px;
    }

    .delete__tech {
      width: 84px;
    }
  }
`;
