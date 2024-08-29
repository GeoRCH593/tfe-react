import { GlobalStyle } from "../../styles/common/globalStyles";
import {
  CloseButton,
  ContainerModal,
  HeaderModal,
  ModalButton,
  ModalButtonContainer,
  Overlay,
} from "./modalStyle";
import PropTypes from "prop-types";

const Modals = ({ children, title, estado, cambiarEstado}) => {
  return (
    <>
      {estado &&
        <Overlay>
          <GlobalStyle />
          <ContainerModal>
            <HeaderModal>
              <h3>{title}</h3>
              <CloseButton onClick={()=> cambiarEstado(!estado)}>
                <i className="bi bi-x-lg"></i>
              </CloseButton>
            </HeaderModal>
            {children}
            <ModalButtonContainer>
              <ModalButton type="submit">Aceptar</ModalButton>
              <ModalButton type="button">Cancelar</ModalButton>
            </ModalButtonContainer>
          </ContainerModal>
        </Overlay>
      }
    </>
  );
};

Modals.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  estado: PropTypes.string,
  cambiarEstado: PropTypes.func,
  aceptar: PropTypes.func,
  cancelar: PropTypes.func,
  cerrar: PropTypes.func,
};

export default Modals;
