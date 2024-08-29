import styled from "styled-components";
import { ModalFormDiv } from "../../Modals/modalStyle";
import { GrayLight, Secondary } from "../../../styles/common/colorStyles";

export const ModalFormDiv2 = styled(ModalFormDiv)`
 label {
    color: ${Secondary};
    width: 35%;
    font-size: 0.9rem;
    font-weight: 700;
  }
textarea {
    width: 75%;
    height: 120px;
    background-color: ${GrayLight};
    border: none;
    font-family: Open Sans;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}
`;