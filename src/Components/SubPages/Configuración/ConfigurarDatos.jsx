import {GlobalStyle} from '../../../styles/globalStyles';
import {BtnContain, BtnSubmit, CheckboxDiv, FormComplete, FormDiv, FormTitle, PageBody, TitlePage} from '../../../styles/Subpages/subpagesStyles';
import {IconEditStyled} from '../../../styles/Subpages/icons';

const Modul = "Proveedores";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar datos del proveedor";
const IconEdit = "bi bi-pencil-fill";

const ConfigurarDatos = () => {
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
          <label>Dirección del emisor:</label>
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
          <label>Teléfono:</label>
          <input type="tel"></input>
          <IconEditStyled className={IconEdit}></IconEditStyled>
        </FormDiv>
        <FormDiv>
          <label>Correo electrónico:</label>
          <input type="email"></input>
          <IconEditStyled className={IconEdit}></IconEditStyled>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Extranjero</label>
          </CheckboxDiv>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Contribuyente especial</label>
          </CheckboxDiv>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Régimen Rimpe</label>
          </CheckboxDiv>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Obligado a llevar contabilidad</label>
          </CheckboxDiv>
        </FormDiv>
        <BtnContain>
          <BtnSubmit type="submit">
            <i className="bi bi-floppy"></i>Guardar Cambios
          </BtnSubmit>
        </BtnContain>
      </FormComplete>
    </div>
  </PageBody>
  );
};

export default ConfigurarDatos;