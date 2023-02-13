import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  height: 88px;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  box-shadow: 0 5px 5px rgb(98 98 98 / 75%);
  background-color: var(--color-grey-4);

  h1 {
    width: 105.53px;
    height: 14.63px;
    color: var(--color-primary);
    font-size: var(--color-title-1);
    font-weight: 700;
  }

  .logout {
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
`;

export default StyledHeader;
