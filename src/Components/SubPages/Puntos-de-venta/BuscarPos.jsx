import { GlobalStyle } from "../../../styles/globalStyles.js";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles.js";
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";
import { SubTitleList } from "./buscarPosStyles.js";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Busqueda de Puntos de venta";

const BuscarPos = () => {
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
            <label>Seleccione la Empresa:</label>
            <select id="identificador" name="tipo identificador">
              <option>Empresa 001</option>
              <option>Empresa 002</option>
              <option>Empresa 003</option>
            </select>
          </FormDiv>
          <ButtonNormal classIconId={"bi bi-search"} textButton={"Buscar POS"} />
          <hr />
          <SubTitleList>
            <h5>Lista de Puntos de venta:</h5>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Sucursal 001</td>
                <td>Calle 1 y calle 2</td>
                <td>001</td>
                <td>POS001</td>
              </tr>
            </tbody>
          </TableGeneral>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BuscarPos;
