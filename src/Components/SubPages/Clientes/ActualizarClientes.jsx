import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";

const Modul = "Empresa";
const IconName = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar datos de cliente";

const ActualizarClientes = () => {
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
            <FormDiv>
              <label>
                <input type="checkbox"></input>
                Extranjero
              </label>
            </FormDiv>
          </FormDiv>
          <ButtonSubmit classIconId={"bi bi-arrow-left-right"} submitText={"Actualizar clientes"}/>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarClientes;
