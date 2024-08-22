import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  SubTitleList,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from '../../Buttons/ButtonSubmit';

const Modul = "Clientes";
const IconClass = "bi bi-person-lines-fill";
const SubPageTitle = "Eliminar Clientes";

const EliminarClientes = () => {
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
          <ButtonNormal 
           classIcon={"bi bi-search"} 
           textButton={"Buscar cliente"}
          />
          <br />
          <hr />
          <SubTitleList>
            <h5>Lista de Clientes: </h5>
          </SubTitleList>
          <TableGeneral>
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
          </TableGeneral>
          <ButtonSubmit iconClass={"bi bi-trash3"} submitText={"Eliminar"}/>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EliminarClientes;
