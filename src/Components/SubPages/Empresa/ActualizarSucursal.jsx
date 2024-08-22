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
const IconName = "bi bi-building-fill";
const SubPageTitle = "Actualizar Datos de Sucursal";
const IconEdit = "bi bi-pencil-fill";

const ActualizarSucursal = () => {
  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>z
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
          <ButtonSubmit
            iconClass={"bi bi-pencil-square"}
            submitText={"Actualzar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarSucursal;
