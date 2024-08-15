import styled from "styled-components";

/*Estilo Contendedor de titulo e img  */

export const HomeBody = styled.div`
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

export const Menu3CardsContain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6em;
  padding: 2em 2em;
`;
