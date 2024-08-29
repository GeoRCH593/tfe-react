import styled from "styled-components";
import { Light, Primary } from "../../styles/common/colorStyles";

export const EditIconButton =styled.button`
border: none;
background: ${Light} ;
`;

export const IconEdit = styled.i`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${Primary};
  }
    `;