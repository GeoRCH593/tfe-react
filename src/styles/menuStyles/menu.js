import styled from "styled-components";
import { Secondary } from "../common/colorStyles";

/*Estilo Contendedor de titulo e img  */

export const MenusBody = styled.div`
position: absolute;
left: 280px;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: -1;
`;

export const TitlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h2 {
    font-family: Open Sans;
    padding-top: 20px;
    font-weight: bold;
  }
  > img {
    width: 100px;
    height: 100%;
  }
`;

export const TitlePage2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  > h2 {
    font-family: Open Sans;
    padding-top: 20px;
    font-weight: bold;
  }
  > i {
    font-size: 2rem;
    width: 50px;
    height: 100%;
    color: ${Secondary};
    font-weight: bold;
  }
`;


export const Menu3CardsContain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6em;
  padding: 3em 2em;
`;

export const Menu4CardsContain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5em;
  padding: 3em 2em;
`;