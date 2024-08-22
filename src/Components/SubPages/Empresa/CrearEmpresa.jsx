import { GlobalStyle } from "../../../styles/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconClass = "bi bi-building";
const SubPageTitle = 'Crear una empresa'

const CrearEmpresa = () => {
  return (
    <PageBody>
      <GlobalStyle />
      <TitlePage>
        <i className={IconClass}></i>
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
          <ButtonSubmit
            IconClass={"bi bi-building-add"}
            submitText={"Crear Empresa"}
          />

        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearEmpresa;