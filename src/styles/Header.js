import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: #08090Ac0;
  backdrop-filter: blur(5px);
  img{
    width: 200px;
    height: auto;
    padding-left: 0px;
  }
  @media only screen and (min-width: 920px) {
  background-color: #08090Ac0;
  backdrop-filter: blur(5px);
    img {
    padding-left: 10px;
    }
  }
  
`;