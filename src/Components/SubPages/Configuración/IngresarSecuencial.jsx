import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, FormComplete, SubTitleList} from '../../../styles/Subpages/subpagesStyles';
import {TableDeleteCompany} from '../../../styles/Subpages/subpagesStyles.js';

const Modul = "Proveedores";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar secuencial de la factura";

const IngresarSecuencial = () => {
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
          <h5>Seleccionar campos: </h5>
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
        <BtnContain>
          <BtnSubmit type="submit">
            <i className="bi bi-search"></i>Buscar factura
          </BtnSubmit>
        </BtnContain>
        <br />
        <hr />
        <SubTitleList>
          <h5>Resultados: </h5>
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
        <BtnContain>
          <BtnSubmit type="submit">
            <i className="bi bi-search"></i>Guardar Cambios
          </BtnSubmit>
        </BtnContain>
      </FormComplete>
    </div>
  </PageBody>
  );
};

export default IngresarSecuencial;