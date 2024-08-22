import { GlobalStyle } from "../../../styles/globalStyles";
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
const IconName = "bi bi-building-fill";
const SubPageTitle = "Actualizar Datos de Sucursal";

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
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete>
          <FormDiv>
            <label>Codigo de Emisión SRI:</label>
            <input type="text" />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Nombre de la Sucursal:</label>
            <input type="number" />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Dirección de la sucursal:</label>
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
            <label>Dirección de la empresa:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Provincia de la empresa:</label>
            <input type="text"></input>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Cantón de la empresa:</label>
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
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualzar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarSucursal;
