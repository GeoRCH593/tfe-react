import { TableSearchDiv } from "../../SubPages/Facturacion/facturacionStyles";

const TableSearch = () => {
  return (
    <TableSearchDiv>
      <thead>
        <tr>
          <th>Código:</th>
          <th>Cantidad:</th>
          <th>Producto:</th>
          <th>Precio U.:</th>
          <th>Tarifa:</th>
          <th>Descuento:</th>
          <th>Valor total:</th>
          <th>Valor ICE</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>S0135</td>
          <td>2</td>
          <td>Producto A</td>
          <td>$ 150.00</td>
          <td>-</td>
          <td>0</td>
          <td>$ 300.00</td>
          <td>0</td>
          <td>
            <i className="bi bi-pencil-fill">Editar</i>
          </td>
        </tr>
      </tbody>
    </TableSearchDiv>
  );
};

export default TableSearch;
