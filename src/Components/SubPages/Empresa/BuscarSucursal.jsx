import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  BtnContain,
  BtnSubmit,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import { TableDeleteCompany } from "../../../styles/Subpages/subpagesStyles";

const Modul = "Empresa";
const IconClass = "bi bi-building";
const SubPageTitle = "Busqueda de sucursal";

const BuscarSucursal = () => {
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
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="number" />
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
          </FormDiv>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-search"></i>Busqueda Empresa
            </BtnSubmit>
          </BtnContain>
          <br />
          <hr />
          <TableDeleteCompany>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Empresa</th>
                <th>Razón Social</th>
                <th>Selección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Geovanny Rodríguez</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableDeleteCompany>
          <br />
          <hr />
          <div>
            <h5>Lista de Sucursales:</h5>
          </div>
          <TableDeleteCompany>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursal</th>
                <th>Dirección</th>
                <th>Provincia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Nombre sucursal 1</td>
                <td>Calle 1 y Calle 2</td>
                <td>Azuay</td>
              </tr>
            </tbody>
          </TableDeleteCompany>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-search"></i>Buscar Sucursal
            </BtnSubmit>
          </BtnContain>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BuscarSucursal;
