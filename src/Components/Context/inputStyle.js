import styled from "styled-components";
import { GrayMedium, Light, Secondary } from "../../styles/common/colorStyles";

/*Contenedor INPUT Y LABEL */
export const FormContain = styled.div`
  background-color: ${Secondary};
  font-family: Open Sans;
  > label {
    color: ${Light};
    width: 100%;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

/*Estilo FORM INPUT */
export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${GrayMedium};
  font-family: Roboto;
  font-size: 1rem;
  padding: 0.1rem;
  margin-bottom: 0.5em;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;

  &:focus {
    color: ${Secondary};
    font-weight: 400;
  }
  &:active{
    color: ${Secondary};
  }
  &::placeholder {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;