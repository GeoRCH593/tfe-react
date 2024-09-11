import { useState } from "react";
import { TableGeneral } from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import EditButton from "../../Buttons/EditButton";
import Modals from "../../Modals/Modals";
import { ContentModal, ModalFormDiv } from "../../Modals/modalStyle";
import {useForm} from 'react-hook-form';

const FormasPago = () => {
  const [modalState, setModalState] = useState(false);

  const {
    register: registermodal,
    handleSubmit: handleSubmitmodal,
    formState: { errors: errorsmodal },
  } = useForm();

  const dataSubmitmodal = handleSubmitmodal((data) => {
    console.log(data);
  });

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
      {modalState && (
      <Modals
        title={"Formas de pago:"}
        estado={modalState}
        accion={dataSubmitmodal}
        cambiarEstado={setModalState}
        funcioncerrar={() => {setModalState(!modalState)}}
      >
        <ContentModal onSubmit={dataSubmitmodal} >
          <div>
            <ModalFormDiv>
              <label>Formas de pago:</label>
              <select id="pago" {...registermodal("pago", {required:true})}>
                <option value={""}>Selecciona</option>
                <option>Sin utilización del sistema financiero</option>
                <option>Compensación de deudas</option>
                <option>Tarjeta de debito</option>
                <option>Dinero electrónico</option>
                <option>Tarjeta prepago</option>
                <option>Tarjeta de crédito</option>
                <option>Otros con utilizacion de sistema financiero</option>
                <option>Endoso de títulos</option>
              </select>
              {errorsmodal.pago && <span>*</span>}
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Valor:</label>
              <input type="text" {...registermodal("valor", {required:true})}/>
              {errorsmodal.valor && <span>*</span>}
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Plazo:</label>
              <input type="text" {...registermodal("plazo", {required:true})}/>
              {errorsmodal.plazo && <span>*</span>}
            </ModalFormDiv>
            <ModalFormDiv>
              <label>Tiempo:</label>
              <input type="text" {...registermodal("tiempo", {required:true})}/>
              {errorsmodal.tiempo && <span>*</span>}
            </ModalFormDiv>
          </div>
        </ContentModal>
      </Modals>
    )}
    </div>
  );
};

export default FormasPago;