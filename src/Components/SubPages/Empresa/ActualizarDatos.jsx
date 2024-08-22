import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import { IconEditStyled } from "../../../styles/Subpages/icons";
import ButtonSubmit from '../../Buttons/ButtonSubmit';

const Modul = "Empresa";
const IconClass = "bi bi-person-lines-fill";
const IconEdit = "bi bi-pencil-fill";
const SubPageTitle = "Actualizar Datos";

const ActualizarDatos = () => {
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
            <label>Ingrese tipo de identificación:</label>
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
            <label>Razón Social:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Cantón:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
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
            <IconEditStyled className={IconEdit}></IconEditStyled>
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
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <ButtonSubmit
            IconClass={"bi bi-pencil-square"}
            submitText={"Actualizar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarDatos;
