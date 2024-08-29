import styled from "styled-components";
import { LightModal, Primary } from "../../styles/common/colorStyles";

export const ContainModalAdvice = styled.div`
  width: 450px;
  background: ${LightModal};
  position: relative;
  border-radius: 2em;
  border: solid 2px ${Primary};
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
    color: ${Primary};
  }
  h2 {
    color: ${Primary};
  }
`;

/* Modulo del boton aceptar */
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1.5em;
`;