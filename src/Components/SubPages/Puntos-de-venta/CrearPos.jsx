import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  TablesContain,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import {SubTitleList} from '../Empresa/eliminarDatosSucursalStyles';

const Modul = "Empresa";
const IconName = "bi bi-shop";
const SubPageTitle = "Crear Punto de Venta (POS)";

const CrearPos = () => {
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
        <TablesContain>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursales</th>
                <th>Dirección</th>
                <th>Puntos de venta</th>
                <th>Secuencial</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>001</td>
              <td>Empresa Cia Ltda 1</td>
              <td>Nombre sucursal</td>
              <td>Calle 3 y Calle 4</td>
              <td>Punto de venta 1</td>
              <td>POS # 4</td>
            </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal 
           classIconId={"bi bi-search"} 
           textButton={"Busqueda Empresa"}
          />

          <br />
          <hr />
          <SubTitleList>
            <h5>Lista de Puntos de venta:</h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Valor Secuencial</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Sucursal</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <select>
                  <option>001</option>
                  <option>002</option>
                  <option>003</option>
                </select>
              </td>
              <td>Empresa Cia Ltda 1</td>
              <td>Calle 1 y Calle 2</td>
              <td>Sucursal 002</td>
            </tr>
            </tbody>
          </TableGeneral>
          <ButtonSubmit
            classIconId={"bi bi-shop"}
            submitText={"Crear Punto de venta"}
          />
        </TablesContain>
      </div>
    </PageBody>
  );
};

export default CrearPos;
