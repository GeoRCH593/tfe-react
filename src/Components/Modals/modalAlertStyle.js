import styled from "styled-components";
import {ContainerModal, ModalButton} from './modalStyle';
import { IconModal } from "./modalSuccessStyle";

export const ContainModalAlert = styled(ContainerModal)`
 border: solid 2px #FFA903 !important;
`;

export const IconModalAlert = styled(IconModal)`
 i {
  color: #FFA903 !important;
 }
 h1 {
  color: #FFA903 !important;
 }
`;

export const ModalButtonAlert = styled(ModalButton)`
background: #FFA903;
color: #000;
`;