import styled from "styled-components";

/*Contenedor boton enviar */
export const BtnContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3em;
`;

/*BOTON ENVIAR */
export const BtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 1.5em;
  background: #0c302e;
  color: #fff;
  border: none;
  font-family: Open Sans;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 15px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #39b54a;
  }
`;

export const IconButton = styled.i`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #39B54A;
  }
    `;