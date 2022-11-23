import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  transition: right 0.3s linear;
  height: 100vh;
  padding-top: 4rem;
  font-family: var(--body-font);
  text-transform: uppercase;
  width: 50%;
  background-color: var(--dark-color);
  a {
    color: var(--ligth-color);
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 10px;
      margin-right: 10px;
  }
  @media only screen and (min-width: 920px) {
    width: 100%;
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    padding-top: 0;
    background-color: transparent;
    gap: 20px;
    a {
      margin-bottom: 0px;
      margin-right: 0px;
    }
  }
 
`;