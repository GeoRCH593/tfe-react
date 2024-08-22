import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  BtnContain,
  BtnSubmit,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";

const Modul = "Empresa";
const IconClass = "bi bi-building";
const SubPageTitle = "Busqueda de empresa";

const BusquedaEmpresa = () => {
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
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" name="tipo identificador">
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="number" />
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text"></input>
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text"></input>
          </FormDiv>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-search"></i>Buscar
            </BtnSubmit>
          </BtnContain>
          <hr />
          <br />
          <TableGeneral>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Empresa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
              </tr>
            </tbody>
          </TableGeneral>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BusquedaEmpresa;
