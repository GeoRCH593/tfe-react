import { GlobalStyle } from "../../styles/globalStyles";
import {
  CloseButton,
  ContainerModal,
  HeaderModal,
  Overlay,
} from "./modalStyle";
import PropTypes from "react";

const Modals = ({ children }) => {
  return (
    <Overlay>
      <GlobalStyle />
      <ContainerModal>
        <HeaderModal>
          <h3>Formas de pago:</h3>
          <CloseButton>
            <i className="bi bi-x-lg"></i>
          </CloseButton>
        </HeaderModal>
        {children}
      </ContainerModal>
    </Overlay>
  );
};

Modals.propTypes = {
  children: PropTypes.string,
};

export default Modals;
