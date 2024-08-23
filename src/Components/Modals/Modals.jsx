import { GlobalStyle } from "../../styles/globalStyles";
import {
  CloseButton,
  ContainerModal,
  HeaderModal,
  ModalButton,
  ModalButtonContainer,
  Overlay,
} from "./modalStyle";
import PropTypes from "react";

const Modals = ({ children, title, aceptar, cancelar, cerrar }) => {
  return (
    <Overlay>
      <GlobalStyle />
      <ContainerModal>
        <HeaderModal>
          <h3>Formas de pago:{title}</h3>
          <CloseButton onClick={cerrar}>
            <i className="bi bi-x-lg"></i>
          </CloseButton>
        </HeaderModal>
        {children}
        <ModalButtonContainer>
        <ModalButton onClick={aceptar}>Aceptar </ModalButton>
        <ModalButton onClick={cancelar}>Cancelar</ModalButton>
        </ModalButtonContainer>
      </ContainerModal>
    </Overlay>
  );
};

Modals.propTypes = {
  children: PropTypes.string,
  aceptar: PropTypes.string,
  cancelar: PropTypes.string,
  cerrar: PropTypes.string,
  title: PropTypes.string,
};

export default Modals;
