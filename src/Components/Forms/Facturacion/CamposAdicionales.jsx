import { TableGeneral } from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import EditButton from "../../Buttons/EditButton";

const CamposAdicionales = () => {
  return (
    <div>
      <TableGeneral>
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Descripción:</th>
            <th>Acciones:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>
              <EditButton />
            </td>
          </tr>
        </tbody>
      </TableGeneral>
      <ButtonNormal
        classIcon={"bi bi-distribute-vertical"}
        textButton={"Añadir campo"}
      />
    </div>
  );
};

export default CamposAdicionales;
