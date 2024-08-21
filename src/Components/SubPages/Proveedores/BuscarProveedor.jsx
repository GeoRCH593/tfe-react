import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  BtnContain,
  BtnSubmit,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  SubTitleList,
} from "../../../styles/Subpages/subpagesStyles";
import { TableDeleteCompany } from "../../../styles/Subpages/subpagesStyles.js";

const Modul = "Proveedores";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Buscar proveedor";

const BuscarProveedor = () => {
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
            <h5>Introduzca el proveedor: </h5>
          </SubTitleList>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="text" />
          </FormDiv>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-search"></i>Buscar Cliente
            </BtnSubmit>
          </BtnContain>
          <br />
          <hr />
          <SubTitleList>
            <h5>Lista de Proveedores: </h5>
          </SubTitleList>
          <TableDeleteCompany>
            <thead>
              <tr>
                <th>Código:</th>
                <th>Nombre:</th>
                <th>Tipo:</th>
                <th>Dirección</th>
                <th>Teléfono:</th>
                <th>Acción:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CL001</td>
                <td>Cliente 1</td>
                <td>Persona natural</td>
                <td>Calle 1 y Calle 2</td>
                <td>098 765 4321</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableDeleteCompany>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BuscarProveedor;
