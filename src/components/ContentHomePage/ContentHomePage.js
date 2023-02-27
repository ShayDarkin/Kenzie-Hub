import styled from "styled-components";

const StyledContentHomePage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: absolute;
  height: 500px;
  left: 0px;
  top: 213px;
  width: 100vw;
  background: var(--color-grey-4);
  color: var(--color-grey-0);

  .title__content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  button {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    border: 2px solid var(--color-grey-3);
    color: var(--color-white);
    transition: ease-in-out 0.2s;
  }

  .cardtech__container {
    background: var(--color-grey-3);
    border-radius: 4px;
    width: 780px;
    padding: 22px;
  }

  .card__container {
    width: 780px;
    height: 416px;
  }

  @media (max-width: 789px) {
    .card__container {
      width: 280px;
    }
  }
`;

export default StyledContentHomePage;
