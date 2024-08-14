import styled from 'styled-components';

/*Contenedor INPUT Y LABEL */
export const FormContain = styled.div`
background-color: #0C302E;
font-size: .8rem;
font-family: Open Sans;
font-weight: 100;
>label {
  color: #fff;
}
`;

/*Estilo FORM INPUT */
export const FormInput = styled.input`
width: 100%;
border: 1px solid #ddd;
font-family: Roboto;
font-size: 1rem;
padding: 0.3rem;
margin-bottom: 1rem;
  &::placeholder{
  font-size: .8rem;
  font-weight: 100;
}
`;