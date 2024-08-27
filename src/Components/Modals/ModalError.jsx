import { GlobalStyle } from "../../styles/globalStyles";
import { ButtonContainer } from "./modalSuccessStyle";
import { CloseButton, Overlay } from "./modalStyle";
import PropTypes from "prop-types";
import { ContainModalError, IconModalError, ModalButtonError } from "./modalErrorStyle";

const ModalError = ({ estado, cambiarEstado, titulo, subtitulo }) => {
  return (
    <Overlay>
      <GlobalStyle />
      <ContainModalError>
        <CloseButton onClick={() => cambiarEstado(!estado)}>
          <i className="bi bi-x-lg"></i>
        </CloseButton>
        <IconModalError>
          <i className="bi bi-x-octagon"></i>
          <h2>{titulo}</h2>
          <h6>{subtitulo}</h6>
        </IconModalError>
        <ButtonContainer>
          <ModalButtonError type="submit">Aceptar</ModalButtonError>
        </ButtonContainer>
      </ContainModalError>
    </Overlay>
  );
};

ModalError.propTypes = {
  estado: PropTypes.string,
  cambiarEstado: PropTypes.func,
  aceptar: PropTypes.func,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
};

export default ModalError;