import {
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import EditButton from "../../Buttons/EditButton";

const FormasPago = () => {
  return (
    <div>
      <TableGeneral>
        <thead>
          <tr>
            <th>Formas de pago:</th>
            <th>Valor:</th>
            <th>Plazo:</th>
            <th>Tiempo:</th>
            <th>Acciones:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tarjeta</td>
            <td>$ 20.20</td>
            <td>-</td>
            <td>-</td>
            <td>
              <EditButton/>
            </td>
          </tr>
        </tbody>
      </TableGeneral>
      <ButtonNormal 
           classIconId={"bi bi-wallet2"} 
           textButton={"Añadir forma de pago"}
          />
    </div>
  );
};

export default FormasPago;
