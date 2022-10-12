import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  img{
    width: 150px;
    height: auto;
    padding-left: 0px;
  }
  @media only screen and (min-width: 920px) {
    padding: 10px;
    img {
    padding-left: 10px;
    }
  }
  
`;