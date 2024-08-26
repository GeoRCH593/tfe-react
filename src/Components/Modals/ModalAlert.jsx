import {GlobalStyle} from '../../styles/globalStyles';
import {ButtonContainer} from './modalSuccessStyle';
import {CloseButton, Overlay} from './modalStyle';
import PropTypes from 'prop-types';
import { ContainModalAlert, IconModalAlert, ModalButtonAlert } from './modalAlertStyle';

const ModalAlert = ({estado, cambiarEstado, titulo, subtitulo}) => {
  return (
    <Overlay>
      <GlobalStyle />
      <ContainModalAlert>
        <CloseButton onClick={() => cambiarEstado(!estado)}>
          <i className="bi bi-x-lg"></i>
        </CloseButton>
        <IconModalAlert>
          <i className="bi bi-exclamation-triangle"></i>
          <h1>{titulo}</h1>
          <h5>{subtitulo}</h5>
        </IconModalAlert>
        <ButtonContainer>
          <ModalButtonAlert type="submit">Aceptar</ModalButtonAlert>
        </ButtonContainer>
      </ContainModalAlert>
    </Overlay>
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