import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import { IconEditStyled } from "../../../styles/Subpages/icons.js";
import { SubTitleList } from "../Empresa/eliminarDatosSucursalStyles";
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";
import ButtonSubmit from "../../Buttons/ButtonSubmit.jsx";

const Modul = "Empresa";
const IconName = "bi bi-building";
const IconEdit = "bi bi-pencil-fill";
const SubPageTitle = "Actualizar Punto de venta";

const ActualizarPos = () => {
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
          <SubTitleList>
            <h5>Seleccionar de Puntos de venta:</h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursales</th>
                <th>Dirección</th>
                <th>POS</th>
                <th>Secuencial</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Nombre Empresa</td>
                <td>Nombre Sucursal</td>
                <td>Calle 1 y calle 2</td>
                <td>Punto de venta 001</td>
                <td>POS 002</td>
                <td><input type="checkbox"></input></td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal 
           classIconId={"bi bi-search"} 
           textButton={"Busqueda de POS"}
          />
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
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
            <IconEditStyled className={IconEdit}></IconEditStyled>
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-arrow-left-right"}
            submitText={"Modificar POS"}
          />
          <br />
          <hr />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarPos;