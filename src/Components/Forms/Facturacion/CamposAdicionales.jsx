import { useState } from "react";
import { TableGeneral } from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import EditButton from "../../Buttons/EditButton";
import Modals from "../../Modals/Modals";
import { ContentModal } from "../../Modals/modalStyle";
import { ModalFormDiv2 } from "./camposAdicionalesStyle";

const CamposAdicionales = () => {
  const [modalState, setModalState]=useState(false);
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
        classIconId={"bi bi-distribute-vertical"}
        textButton={"Añadir campo"}
        onClick={()=> setModalState(!modalState)}
      />
      {/*Modal de Campos adicionales */}
      <Modals 
      title={"Campos adicionales:"}
      estado={modalState}
      cambiarEstado={setModalState}
      >
        <ContentModal>
          <form>
            <ModalFormDiv2>
              <label>Nombre</label>
              <input type="text" />
            </ModalFormDiv2>
            <ModalFormDiv2>
              <label>Descripción</label>
              <textarea rows="5" cols="30"/>
            </ModalFormDiv2>
          </form>
        </ContentModal>
      </Modals>
    </div>
  );
};

export default CamposAdicionales;
