import { GlobalStyle } from "../../../styles/globalStyles";
import {
  BtnContain,
  BtnSubmit,
  CheckboxDiv,
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";

const Modul = "Proveedores";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Ingresar Nuevo proveedor";

const CrearProveedor = () => {
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
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-person-plus-fill"></i>Crear Nuevo Proveedor
            </BtnSubmit>
          </BtnContain>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearProveedor;
