import { TableValues } from "../../SubPages/Facturacion/facturacionStyles.js";

const TablaValores = () => {
  return (
    <div>
      <TableValues>
        <thead>
          <tr>
            <th>Detalles</th>
            <th>Valores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal sin impuestos:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal 15%:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal 5%:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal tarifa especial:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal 0%:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal no excepto del IVA:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Subtotal excepto del IVA:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Total descuento</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Valor ICE:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>IVA 15%:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>IVA 5%</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>IVA Tarifa especial:</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Propina 10%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Valor a Pagar:</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </TableValues>
    </div>
  );
};

export default TablaValores;
