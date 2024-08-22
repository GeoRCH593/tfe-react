import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import { IconEditStyled } from "../../../styles/Subpages/icons";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconClass = "bi bi-person-lines-fill";
const IconEdit = "bi bi-pencil-fill";
const SubPageTitle = "Actualizar datos de cliente";

const ActualizarClientes = () => {
  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
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
            <label>Tipo de identificación:</label>
            <select id="identificador" name="tipo identificador">
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="number" />
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Tipo de cliente:</label>
            <select id="identificador" name="tipo identificador">
              <option>Persona natural</option>
              <option>Empresa</option>
            </select>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Dirección:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>

          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
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
          <ButtonSubmit IconClass={"bi bi-arrow-left-right"} submitText={"Actualizar clientes"}/>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarClientes;
