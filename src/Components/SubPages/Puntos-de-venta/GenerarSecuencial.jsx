import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  TablesContain,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import { SubTitleList } from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconName = "bi bi-shop";
const SubPageTitle = "Crear Punto de Venta (POS)";

const GenerarSecuencial = () => {
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
          <br />
          <SubTitleList>
            <h5>Lista de Puntos de venta:</h5>
          </SubTitleList>
          <TableGeneral>
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
          </TableGeneral>
          <ButtonSubmit
            classIconId={"bi bi-123"}
            submitText={"Generar secuencial"}
          />
        </TablesContain>
      </div>
    </PageBody>
  );
};

export default GenerarSecuencial;