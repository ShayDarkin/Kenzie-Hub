import styled from "styled-components";

export const StyledCard = styled.div`
  background: var(--color-grey-3);
  border-radius: 4px;
  width: 780px;
  padding: 22px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  li {
    background: var(--color-grey-4);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    transition: ease-in-out 0.5s;
  }

  .status__tech {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14.182px;
    line-height: 22px;
    color: var(--color-grey-1);
  }

  .delete__button,
  .change__button {
    background: var(--color-grey-4);
    border: none;
    margin-left: 5px;
  }
  li:hover {
    background: var(--color-grey-2);
  }

  @media (max-width: 789px) {
    width: 236px;
  }
`;
