import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  transition: right 0.3s linear;
  height: 100vh;
  padding-top: 3rem;
  font-family: var(--title-font);
  width: 50%;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 1px;
    margin: 0 20px;
  }
  @media only screen and (min-width: 920px) {
    width: 100%;
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    padding-top: 0;
  }
 
`;