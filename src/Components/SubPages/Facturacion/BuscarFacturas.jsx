import { GlobalStyle } from "../../../styles/common/globalStyles.js";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  SubTitleList,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";
import { SearchFactDiv, SelectDiv } from "./facturacionStyles.js";

const Modul = "Facturación";
const IconName = "bi bi-receipt";
const SubPageTitle = "Busqueda de Facturas";

const BuscarFacturas = () => {
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
            <h5>Seleccionar campos: </h5>
          </SubTitleList>
          <SearchFactDiv>
            <SelectDiv>
              <label>Tipo de factura</label>
              <select id="factura" name="tipo identificador">
                <option>Emitido</option>
                <option>Borrador</option>
              </select>
            </SelectDiv>
            <SelectDiv>
              <label>Ambiente</label>
              <select id="factura" name="tipo identificador">
                <option>Prueba</option>
                <option>Produccion</option>
              </select>
            </SelectDiv>
            <SelectDiv>
              <label>Fecha desde:</label>
              <input type="date" />
            </SelectDiv>
            <SelectDiv>
              <label>Fecha hasta:</label>
              <input type="date" />
            </SelectDiv>
          </SearchFactDiv>
          <ButtonNormal
            classIconId={"bi bi-search"}
            textButton={"Buscar Factura"}
          />
          <hr />
          <SubTitleList>
            <h5>Resultados: </h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código:</th>
                <th>Cliente:</th>
                <th>Monto:</th>
                <th>Autorización:</th>
                <th>Ambiente:</th>
                <th>Estado:</th>
                <th>Secuencial</th>
                <th>Punto de emisión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FR002</td>
                <td>Empresa 1</td>
                <td>$ 230.00</td>
                <td>05-06-2024</td>
                <td>Producción</td>
                <td>Borrador</td>
                <td>001</td>
                <td>Sucursal 1</td>
              </tr>
            </tbody>
          </TableGeneral>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BuscarFacturas;
