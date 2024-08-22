import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import ModifyButton from "../../Buttons/ModifyButton";

const Modul = "Empresa";
const IconName = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar Datos";

const ActualizarDatos = () => {
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
            <label>Ingrese tipo de identificación:</label>
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
            <label>Razón Social:</label>
            <input type="text"></input>
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text"></input>
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text"></input>
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Cantón:</label>
            <input type="text"></input>
          <ModifyButton />  
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
          <ModifyButton />  
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
          <ModifyButton />  
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
          <ModifyButton />  
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

export default ActualizarDatos;
