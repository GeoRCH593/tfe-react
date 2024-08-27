import { GlobalStyle } from "../../styles/globalStyles";
import { ButtonContainer } from "./modalSuccessStyle";
import { CloseButton, Overlay } from "./modalStyle";
import PropTypes from "prop-types";
import {
  ContainModalAlert,
  IconModalAlert,
  ModalButtonAlert,
} from "./modalAlertStyle";

const ModalAlert = ({ estado, cambiarEstado, titulo, subtitulo }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <GlobalStyle />
          <ContainModalAlert>
            <CloseButton onClick={() => cambiarEstado(!estado)}>
              <i className="bi bi-x-lg"></i>
            </CloseButton>
            <IconModalAlert>
              <i className="bi bi-exclamation-triangle"></i>
              <h2>{titulo}</h2>
              <h6>{subtitulo}</h6>
            </IconModalAlert>
            <ButtonContainer>
              <ModalButtonAlert type="submit">Aceptar</ModalButtonAlert>
            </ButtonContainer>
          </ContainModalAlert>
        </Overlay>
      )}
    </>
  );
};

ModalAlert.propTypes = {
  estado: PropTypes.string,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  cambiarEstado: PropTypes.func,
  aceptar: PropTypes.func,
};

export default ModalAlert;
