import styled from "styled-components";
import {ContainerModal, ModalButton} from './modalStyle';
import {IconModal} from './modalSuccessStyle';

export const ContainModalError = styled(ContainerModal)`
 border: solid 2px #FF0000 !important;
`;

export const IconModalError = styled(IconModal)`
 i {
  color: #FF0000 !important;
 }
 h1 {
  color: #FF0000 !important;
 }
`;

export const ModalButtonError = styled(ModalButton)`
background: #FF0000;
color: #fff;
`;