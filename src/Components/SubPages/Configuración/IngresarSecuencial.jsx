import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  SubTitleList,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import EditButton from "../../Buttons/EditButton.jsx";
import { SearchFactDiv } from "../Facturacion/facturacionStyles.js";
import { ConfDiv } from "./configuracionStyles.js";
import ButtonSubmit from '../../Buttons/ButtonSubmit';

const Modul = "Configuración";
const IconName = "bi bi-gear-fill";
const SubPageTitle = "Actualizar secuencial de la factura";

const IngresarSecuencial = () => {
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
          <ButtonSubmit
            IconClass={"bi bi-search"}
            submitText={"Buscar Factura"}
          />
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
                  <EditButton/>
                </td>
                <td>Anular factura</td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonSubmit
            iconClass={"bi bi-floppy"}
            submitText={"Guardar cambios"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default IngresarSecuencial;
