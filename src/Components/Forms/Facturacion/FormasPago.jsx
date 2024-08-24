import { useState } from "react";
import { TableGeneral } from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import EditButton from "../../Buttons/EditButton";
import Modals from "../../Modals/Modals";
import { ContentModal, ModalFormDiv } from "../../Modals/modalStyle";

const FormasPago = () => {
  const [modalState, setModalState] = useState(false);
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
              <EditButton />
            </td>
          </tr>
        </tbody>
      </TableGeneral>
      <ButtonNormal
        classIconId={"bi bi-wallet2"}
        textButton={"Añadir forma de pago"}
        onClick={()=> setModalState(!modalState)}
      />
      {/* Modal forma de pago*/}
      <Modals
        title={"Formas de pago:"}
        estado={modalState}
        cambiarEstado={setModalState}
      >
        <ContentModal>
          <form>
            <ModalFormDiv>
              <label>Formas de pago:</label>
              <select id="pago" name="Formas de pago">
                <option>R.U.C</option>
                <option>Cédula</option>
                <option>Pasaporte</option>
                <option>Identificador del exterior</option>
                <option>Consumidor final</option>
              </select>
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Valor:</label>
              <input type="text" />
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Plazo:</label>
              <input type="text" />
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Tiempo:</label>
              <input type="text" />
            </ModalFormDiv>
          </form>
        </ContentModal>
      </Modals>
    </div>
  );
};

export default FormasPago;