import {
  TableGeneral,
  BtnContain,
  BtnSubmit,
} from "../../../styles/Subpages/subpagesStyles";
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
      <BtnContain>
        <BtnSubmit type="button">Añadir Forma de pago</BtnSubmit>
      </BtnContain>
    </div>
  );
};

export default FormasPago;
