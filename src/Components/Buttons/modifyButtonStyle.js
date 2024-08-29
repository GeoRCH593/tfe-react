import styled from 'styled-components';
import { Primary, Secondary } from '../../styles/common/colorStyles';


export const ButtonModify =styled.button`
background-color: none;
border: none;
`;

export const IconEditStyled = styled.i`
color: ${Secondary};
font-size: 1.2em;
cursor: pointer;
transition: all .3s ease-in-out;
&:hover {
  color: ${Primary}; 
}
`;