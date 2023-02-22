import styled from "styled-components";

const StyledContentHomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;
  position: absolute;
  width: 320px;
  height: 131px;
  left: 0px;
  top: 230px;
  width: 100vw;
  background: var(--color-grey-4);
  color: var(--color-grey-0);
  border-bottom: 2px solid var(--color-grey-3);
  border-top: 2px solid var(--color-grey-3);

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
`;

export default StyledContentHomePage;
