import styled from 'styled-components';
import { Light, Primary, Secondary } from '../../styles/common/colorStyles';

/*Botones de formulario */
export const FormButton = styled.button`
width: 100%;
background: ${Primary};
color: ${Secondary};
outline: none;
border: none;
font-family: Open Sans;
font-size: 1rem;
font-weight: bold;
border-radius: 15px;
transition: all .4s ease-in-out;
&:hover{
  color: ${Primary};
  background: ${Light};
}
`;