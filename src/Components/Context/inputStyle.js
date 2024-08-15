import styled from "styled-components";

/*Contenedor INPUT Y LABEL */
export const FormContain = styled.div`
  background-color: #0c302e;
  font-family: Open Sans;
  > label {
    color: #fff;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 100;
  }
`;

/*Estilo FORM INPUT */
export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  font-family: Roboto;
  font-size: 1rem;
  padding: 0.3rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
  &:focus {
    color: #0C302E;
    font-weight: 400;
  }
  &:active{
    color: #0C302E;
  }
  &::placeholder {
    font-size: 0.8rem;
    font-weight: 200;
  }
`;