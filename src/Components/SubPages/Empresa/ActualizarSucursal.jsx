import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, FormComplete, FormDiv} from '../../../styles/Subpages/subpagesStyles';
import {IconEditStyled} from './actualizarDatosStyle';

const Modul = "Empresa";
const IconClass = "bi bi-building-fill";
const SubPageTitle = "Actualizar Datos de Sucursal";
const IconEdit = "bi bi-pencil-fill";

const ActualizarSucursal = () => {
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
          <label>Codigo de Emisión SRI:</label>
          <input type="text" />
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Nombre de la Sucursal:</label>
            <input type="number" />
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Dirección de la sucursal:</label>
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
            <label>Dirección de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Provincia de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Cantón de la empresa:</label>
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
          </FormDiv>
          <BtnContain>
        <BtnSubmit type="submit"><i className="bi bi-pencil-square"></i>Actualizar</BtnSubmit>
      </BtnContain>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarSucursal;