import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, TablesContain, TableGeneral} from '../../../styles/Subpages/subpagesStyles';
import {SubTitleList} from '../Empresa/eliminarDatosSucursalStyles';

const Modul = "Empresa";
const IconClass = "bi bi-building";
const SubPageTitle = "Eliminar Punto de venta";

const EliminarPos = () => {
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
            <i className="bi bi-trash3"></i>Eliminar POS
          </BtnSubmit>
        </BtnContain>
      </TablesContain>
    </div>
  </PageBody>
  );
};

export default EliminarPos;