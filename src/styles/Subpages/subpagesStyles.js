import styled from "styled-components";
import { DangerColor, GrayLight, GrayLighter, GrayMedium, Light, Secondary } from "../common/colorStyles";

export const PageBody = styled.div`
  position: absolute;
  font-family: Open Sans;
  left: 280px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  z-index: -1;
`;

/*Titulo de pagina titulo e icono */
export const TitlePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  padding-bottom: 10px;
  > h2 {
    font-family: Open Sans;
    padding-top: 20px;
    font-weight: bold;
  }
  > i {
    font-size: 2rem;
    width: 50px;
    height: 100%;
    color: ${Secondary};
    font-weight: bold;
  }
`;

/*Contenedor de Formulario Completo 1columna*/
export const FormComplete = styled.form`
  display: flex;
  flex-direction: column;
  background: ${GrayLighter};
  min-width: 800px;
  padding: 2em;
`;

/*Contendor de titulo formulario */
export const FormTitle = styled.div`
  display: flex;
  background-color: ${Secondary};
  color: ${Light};
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;

/*Contendedor de cada input, label, span 1 columna*/
export const FormDiv = styled.div`
  padding: 0.3em 2em;
  width: 100%;
  gap: 0.2em;
  > label {
    color: ${Secondary};
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
  }
  > input {
    width: 90%;
    padding-left: 0.6em;
    background-color: ${GrayLight};
    border: none;
    font-family: Open Sans;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
  }
  > select {
    width: 80%;
    background-color: ${GrayLight};
    border: none;
    font-size: 14px;
  }
  > span {
    font-size: 0.7em;
    color: ${DangerColor};
    font-style: italic;
    padding-left: 1em;
  }
`;

export const FormDivSpan = styled(FormDiv)`
display: flex;
flex-direction: column;
`;

/* Checkbox */
export const CheckBoxOne = styled.input`
  padding: 5px 5px;
  width: 100%;
  > label {
    color: ${Secondary};
    width: 100%;
    font-size: 0.8rem;
    font-weight: 500;
  }
  > input {
    width: 75%;
  }
  > select {
    width: 80%;
  }
`;

/*Contenedor para 2 tablas CREAR BUSQUEDA ELIMINAR */
export const TablesContain = styled.div`
  min-width: 900px;
  background: ${GrayLighter};
  padding: 2em 2em;
`;

/*Tabla de eliminar datos */
export const TableGeneral = styled.table`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  > thead {
    background: ${GrayMedium};
    padding: 2em 2em;
    font-size: 13px;
    text-align: left;
  }
  > tbody {
    background: ${Light};
    font-size: 13px;
    padding-top: 1em;
    > tr {
      padding: 1em 0 !important;
    }
  }
`;

/*Subtitle sobre tabla*/
export const SubTitleList = styled.div`
  padding: 2em 0 1em 0;
  > h5 {
    font-weight: 700;
  }
`;

/*Contenedores de checkbox*/
export const CheckboxDiv = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em 3em;
  label {
    font-size: 0.8em;
    font-weight: 600;
  }
`;