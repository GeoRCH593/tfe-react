import styled from "styled-components";
import {ContainerModal, ModalButton} from './modalStyle';
import {IconModal} from './modalSuccessStyle';
import { DangerColor, Light } from "../../styles/common/colorStyles";

export const ContainModalError = styled(ContainerModal)`
 border: solid 2px ${DangerColor} !important;
`;

export const IconModalError = styled(IconModal)`
 i {
  color: ${DangerColor} !important;
 }
 h2 {
  color: ${DangerColor}!important;
 }
`;

export const ModalButtonError = styled(ModalButton)`
background: ${DangerColor};
color: ${Light};
`;