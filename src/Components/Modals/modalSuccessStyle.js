import styled from "styled-components";

export const ContainModalAdvice = styled.div`
  width: 450px;
  background: #faf9f9;
  position: relative;
  border-radius: 2em;
  border: solid 2px #39b54a;
  box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px;
  padding: 1.2em;
`;

export const IconModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  i {
    width: 80px;
    height: 100px;
    font-size: 5em;
    color: #39b54a;
  }
  h2 {
    color: #39b54a;
  }
`;

/* Modulo del boton aceptar */
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1.5em;
`;
