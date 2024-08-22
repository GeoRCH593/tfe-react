import {BtnContain, BtnSubmit, TableGeneral} from '../../../styles/Subpages/subpagesStyles';
import EditButton from '../../Buttons/EditButton';


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
              <BtnContain>
                <BtnSubmit type="button">Añadir campo adicional</BtnSubmit>
              </BtnContain>
    </div>
  );
};

export default CamposAdicionales;