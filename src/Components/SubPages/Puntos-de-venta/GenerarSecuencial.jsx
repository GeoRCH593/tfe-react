import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, TablesContain, TableDeleteCompany} from '../../../styles/Subpages/subpagesStyles';
import {SubTitleList} from '../../../styles/Subpages/subpagesStyles';

const Modul = "Empresa";
const IconClass = "bi bi-shop";
const SubPageTitle = "Crear Punto de Venta (POS)";

const GenerarSecuencial = () => {
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
      <TablesContain>
        <br />
        <SubTitleList>
          <h5>Lista de Puntos de venta:</h5>
        </SubTitleList>
        <TableDeleteCompany>
          <thead>
            <tr>
              <th>Código</th>
              <th>Empresa</th>
              <th>Sucursal</th>
              <th>Dirección</th>
              <th>POS</th>
              <th>Secuencial</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>001</td>
            <td>Empresa Cia Ltda 1</td>
            <td>Nombre de sucursal</td>
            <td>Calle 1 y Calle 2</td>
            <td>Puntos de venta 001</td>
            <td>POS 002</td>
          </tr>
          </tbody>
        </TableDeleteCompany>
        <BtnContain>
          <BtnSubmit type="submit">
            <i className="bi bi-123"></i>Generar Secuencial
          </BtnSubmit>
        </BtnContain>
      </TablesContain>
    </div>
  </PageBody>
  );
};

export default GenerarSecuencial;