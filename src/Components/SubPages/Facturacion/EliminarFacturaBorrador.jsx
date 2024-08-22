import {GlobalStyle} from '../../../styles/globalStyles';
import {PageBody, BtnContain, BtnSubmit, TitlePage, FormTitle, FormComplete, SubTitleList} from '../../../styles/Subpages/subpagesStyles';
import {TableDeleteCompany} from '../../../styles/Subpages/subpagesStyles.js';

const Modul = "Facturación";
const IconClass = "bi bi-receipt";
const SubPageTitle = "Eliminar Factura Borrador";

const EliminarFacturaBorrador = () => {
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
            <h5>Facturas en borrador: </h5>
          </SubTitleList>
          <TableDeleteCompany>
            <thead>
              <tr>
                <th>Código:</th>
                <th>Fecha de emisión:</th>
                <th>Cliente:</th>
                <th>Transacción:</th>
                <th>Forma de pago:</th>
                <th>Descuento:</th>
                <th>Valor Total:</th>
                <th>Valor ICE:</th>
                <th>Acciones:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>F002</td>
                <td>05-08-2024</td>
                <td>Empresa 2</td>
                <td>$ 150.00</td>
                <td>Crédito</td>
                <td>0</td>
                <td>150</td>
                <td>0</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableDeleteCompany>
          <BtnContain>
            <BtnSubmit type="submit">
              <i className="bi bi-trash3"></i>Eliminar Facturas
            </BtnSubmit>
          </BtnContain>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EliminarFacturaBorrador;