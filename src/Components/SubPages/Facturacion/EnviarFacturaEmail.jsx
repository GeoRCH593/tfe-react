import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, FormComplete, SubTitleList} from '../../../styles/Subpages/subpagesStyles';
import {TableDeleteCompany} from '../../../styles/Subpages/subpagesStyles.js';
import {SearchFactDiv, SelectDiv} from './facturacionStyles.js';

const Modul = "Facturación";
const IconClass = "bi bi-receipt";
const SubPageTitle = "Enviar Factura por email";

const EnviarFacturaEmail = () => {
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
        <BtnContain>
          <BtnSubmit type="submit">
            <i className="bi bi-search"></i>Buscar factura
          </BtnSubmit>
        </BtnContain>
        <hr />
        <SubTitleList>
          <h5>Resultados: </h5>
        </SubTitleList>
        <TableDeleteCompany>
          <thead>
            <tr>
              <th>Código:</th>
              <th>Cliente:</th>
              <th>Monto:</th>
              <th>Autorización:</th>
              <th>Ambiente:</th>
              <th>Tipo:</th>
              <th>Descargar</th>
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
              <td>Factura</td>
              <td>
                <i className="bi bi-download"> Guardar</i>
              </td>
              <td><input type='checkbox'/></td>
            </tr>
          </tbody>
        </TableDeleteCompany>
        <BtnContain>
          <BtnSubmit type="button">
            <i className="bi bi-search"></i>Enviar por correo
          </BtnSubmit>
        </BtnContain>
      </FormComplete>
      
    </div>
  </PageBody>
  );
};

export default EnviarFacturaEmail;