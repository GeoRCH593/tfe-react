import styled from "styled-components";
import { Dark, GrayLight, GrayLighter, Light, Primary, Secondary } from "../../styles/common/colorStyles";

/*Pantalla oscura con opacidad */
export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 2.5em;
  z-index: 120;
`;
/*Contenedor exterior para MODAL normal */
export const ContainerModal = styled.form`
  width: 500px;
  background: ${GrayLighter};
  position: relative;
  border-radius: 2em;
  border: solid 2px ${Primary};
  box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px;
  padding: 1.2em;
`;

/*Emcabezado del modal */
export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  padding-bottom: 1em;

  h3 {
    font-weight: 500;
    font-size: 1.4em;
    color: ${Primary};
  }
`;

/*Boton cerrar modal X */
export const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  i {
    color: ${Dark};
    font-size: 1.4em;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${Primary};
    }
  }
`;

/*Contenido para formulario en modal */
export const ModalFormDivComplete = styled.form`

`;

/*Contenido dentro del modal children*/
export const ContentModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
`;


/*Contenedor de 2 botones aceptar y cancelar */
export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  padding-bottom: 1em;
`;

/*Estilo de boton para modal  */
export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 1.5em;
  background: ${Secondary};
  color: ${Light};
  border: none;
  font-family: Open Sans;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 8px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: ${Primary};
    color: ${Secondary};
    box-shadow: rgba(0, 0, 0, 0.44) 0px 2px 5px;
  }
`;

/*Modal estilo de contenedor para formulario label e input*/
export const ModalFormDiv = styled.div`
display: flex;
justify-content: space-evenly;
  padding: 0.3em 2em;
  width: 100%;
   label {
    color: ${Secondary};
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
  }
   input {
    width: 75%;
    background-color: ${GrayLight};
    border: none;
    font-family: Open Sans;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
  }
   select {
    width: 80%;
    background-color: ${GrayLight};
    border: none;
    font-size: 14px;
  }
`;