import styled from "styled-components";
import {ContainerModal, ModalButton} from './modalStyle';
import { IconModal } from "./modalSuccessStyle";
import { AlertColor, Dark } from "../../styles/common/colorStyles";

export const ContainModalAlert = styled(ContainerModal)`
 border: solid 2px ${AlertColor} !important;
`;

export const IconModalAlert = styled(IconModal)`
 i {
  color: ${AlertColor} !important;
 }
 h2 {
  color: ${AlertColor} !important;
 }
`;

export const ModalButtonAlert = styled(ModalButton)`
background: ${AlertColor};
color: ${Dark};
`;