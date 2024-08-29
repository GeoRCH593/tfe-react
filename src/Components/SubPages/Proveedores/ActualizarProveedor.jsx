import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  CheckboxDiv,
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";

const Modul = "Proveedores";
const IconName = "bi bi-person-rolodex";
const SubPageTitle = "Actualizar datos del proveedor";

const ActualizarProveedor = () => {
  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
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
            <label>Tipo de identificación:</label>
            <select id="identificador" name="tipo identificador">
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="number" />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Tipo de cliente:</label>
            <select id="identificador" name="tipo identificador">
              <option>Persona natural</option>
              <option>Empresa</option>
            </select>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Dirección:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Canton:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
            <ModifyButton />
            <FormDiv>
              <label>
                <input type="checkbox"></input>
                Obligado a llevar contabilidad:
              </label>
            </FormDiv>
            <CheckboxDiv>
              <input type="checkbox"></input>
              <label>Extranjero</label>
            </CheckboxDiv>
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualizar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarProveedor;
