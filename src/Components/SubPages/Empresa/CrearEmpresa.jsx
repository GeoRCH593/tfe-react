import { GlobalStyle } from "../../../styles/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ModalAlert from "../../Modals/ModalAlert";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear una empresa";

const CrearEmpresa = () => {
  const [modalState, setModalState] = useState(false);
  const {register} = useForm()

  return (
    <PageBody>
      <GlobalStyle />
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete>
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" name="tipo identificador">
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="number" />
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Cantón:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>
              <input type="checkbox"></input>
              Extranjero
            </label>
          </FormDiv>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel"></input>
          </FormDiv>
          <FormDiv>
            <label>
              <input type="checkbox"></input>
              Obligado a llevar contabilidad:
            </label>
          </FormDiv>
          <FormDiv>
            <label>Subir imagen de logotipo:</label>
            <input type="file"></input>
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
          </FormDiv>
          <ButtonNormal
            classIconId={"bi bi-building-add"}
            textButton={"Crear Empresa"}
            onClick={()=> setModalState(!modalState)}
          />
        </FormComplete>
      </div>
      <ModalAlert
        titulo={"Ingresar Datos"}
        subtitulo={"Porfavor ingresar datos en los campos"}
        estado={modalState}
        cambiarEstado={setModalState}
      />
    </PageBody>
  );
};

export default CrearEmpresa;
