import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  BtnContain,
  BtnSubmit,
  TitlePage,
  FormTitle,
  FormComplete,
  SubTitleList,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import { SearchFactDiv } from "../Facturacion/facturacionStyles.js";
import { ConfDiv } from "./configuracionStyles.js";

const Modul = "Configuración";
const IconClass = "bi bi-gear-fill";
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
          <SearchFactDiv>
            <ConfDiv>
              <label>Tipo de factura</label>
              <select id="factura" name="tipo identificador">
                <option>Emitido</option>
                <option>Borrador</option>
              </select>
            </ConfDiv>
            <ConfDiv>
              <label>Ambiente</label>
              <select id="factura" name="tipo identificador">
                <option>Prueba</option>
                <option>Produccion</option>
              </select>
            </ConfDiv>
            <ConfDiv>
              <label>Fecha desde:</label>
              <input type="date" />
            </ConfDiv>
            <ConfDiv>
              <label>Fecha hasta:</label>
              <input type="date" />
            </ConfDiv>
          </SearchFactDiv>
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
                <th>Acciones</th>
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
                <td>
                  <i className="bi bi-pencil-fill">Editar</i>
                </td>
                <td>Anular factura</td>
              </tr>
            </tbody>
          </TableGeneral>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-floppy"></i>Guardar Cambios
            </BtnSubmit>
          </BtnContain>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default IngresarSecuencial;
