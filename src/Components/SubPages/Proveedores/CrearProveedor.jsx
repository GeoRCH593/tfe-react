import { GlobalStyle } from "../../../styles/globalStyles";
import {
  CheckboxDiv,
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Proveedores";
const IconName = "bi bi-person-rolodex";
const SubPageTitle = "Ingresar Nuevo proveedor";

const CrearProveedor = () => {
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
            <label>Tipo de cliente:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Dirección:</label>
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
            <label>Teléfono:</label>
            <input type="tel"></input>
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
          </FormDiv>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Extranjero</label>
          </CheckboxDiv>
          <ButtonSubmit
            iconClass={"bi bi-person-plus-fill"}
            submitText={"Crear nuevo proveedor"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearProveedor;
