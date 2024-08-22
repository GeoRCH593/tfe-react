import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  BtnContain,
  BtnSubmit,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import { IconEditStyled } from "../../../styles/Subpages/icons.js";
import { SubTitleList } from "../Empresa/eliminarDatosSucursalStyles";

const Modul = "Empresa";
const IconClass = "bi bi-building";
const IconEdit = "bi bi-pencil-fill";
const SubPageTitle = "Actualizar Punto de venta";

const ActualizarPos = () => {
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
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-search"></i>Busqueda de POS
            </BtnSubmit>
          </BtnContain>
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
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-arrow-left-right"></i>Modificar POS
            </BtnSubmit>
          </BtnContain>
          <br />
          <hr />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarPos;
