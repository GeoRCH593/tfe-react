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

const Modals = ({ children, title, funcioncerrar, accion }) => {
  return (
    <>
        <Overlay>
          <GlobalStyle />
          <ContainerModal>
            <HeaderModal>
              <h3>{title}</h3>
              <CloseButton onClick={funcioncerrar}>
                <i className="bi bi-x-lg"></i>
              </CloseButton>
            </HeaderModal>
            {children}
            <ModalButtonContainer>
              <ModalButton type="submit" onClick={accion}>Aceptar</ModalButton>
              <ModalButton type="button">Cancelar</ModalButton>
            </ModalButtonContainer>
          </ContainerModal>
        </Overlay>
    </>
  );
};

Modals.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  accion:PropTypes.func,
  funcioncerrar: PropTypes.func,
};

export default Modals;