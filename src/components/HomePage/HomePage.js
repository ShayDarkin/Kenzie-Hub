import styled from "styled-components";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  width: 320px;
  height: 131px;
  left: 0px;
  top: 73px;
  width: 100vw;
  background: var(--color-grey-4);
  color: var(--color-grey-0);

  border-bottom: 2px solid var(--color-grey-3);
  border-top: 2px solid var(--color-grey-3);

  .inf__homepage {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  span {
    font-size: var(--color-headline);
    font-weight: 600;
    color: var(--color-grey-1);
  }

  @media (max-width: 789px) {
    .inf__homepage {
      flex-direction: column;
    }
  }
`;

export default StyledHomePage;
