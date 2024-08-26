import { GlobalStyle } from "../../styles/globalStyles";
import {
  ButtonContainer,
  ContainModalAdvice,
  IconModal,
} from "./modalSuccessStyle";
import { CloseButton, ModalButton, Overlay } from "./modalStyle";
import PropTypes from "prop-types";

const ModalSuccess = ({ estado, cambiarEstado, titulo, subtitulo }) => {
  return (
    <Overlay>
      <GlobalStyle />
      <ContainModalAdvice>
        <CloseButton onClick={() => cambiarEstado(!estado)}>
          <i className="bi bi-x-lg"></i>
        </CloseButton>
        <IconModal>
          <i className="bi bi-check2-circle"></i>
          <h1>{titulo}</h1>
          <h5>{subtitulo}</h5>
        </IconModal>
        <ButtonContainer>
          <ModalButton type="submit">Aceptar</ModalButton>
        </ButtonContainer>
      </ContainModalAdvice>
    </Overlay>
  );
};

ModalSuccess.propTypes = {
  estado: PropTypes.string,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  cambiarEstado: PropTypes.func,
  aceptar: PropTypes.func,
};

export default ModalSuccess;