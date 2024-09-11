import { TitlePage } from "../../../styles/Subpages/subpagesStyles";
import {
  FactBody,
  FactComplete,
  FactDiv,
  FactPartLeft,
  FactPartOne,
  FactPartRight,
  FactPartThree,
  FactPartTwo,
  FactSubBody,
  NumFactDiv,
  TitleSubpage,
} from "./facturacionStyles.js";

import FormasPago from "../../Forms/Facturacion/FormasPago.jsx";
import CamposAdicionales from "../../Forms/Facturacion/CamposAdicionales.jsx";
import TablaValores from "../../Forms/Facturacion/TablaValores.jsx";
import TablaBuscar from "../../Forms/Facturacion/TablaBuscar.jsx";
import ButtonSubmit from "../../Buttons/ButtonSubmit.jsx";
import {useForm} from 'react-hook-form';

const Modul = "Facturación";
const IconName = "bi bi-receipt";
const SubPageTitle = "Crear nueva factura";

const CrearNuevaFactura = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FactComplete onSubmit={dataSubmit}>
      <FactBody>
        <TitlePage>
          <i className={IconName}></i>
          <h2>Módulo: {Modul}</h2>
        </TitlePage>
        <TitleSubpage>
          <h5>{SubPageTitle}</h5>
        </TitleSubpage>
        <FactSubBody>
          <FactPartOne>
            <FactPartLeft>
              <h5>Adquiriente:</h5>
              <FactDiv>
                <label>Cliente:</label>
                <input type="text" {...register("cliente", {required:true})}/>
                {errors.cliente && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Identificación:</label>
                <input type="text" {...register("identificacion", {required:true})}/>
                {errors.identificacion && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Tipo:</label>
                <select id="identificador" {...register("identificador", {required:true})}>
                  <option value={""}>Selecciona</option>
                  <option>R.U.C</option>
                  <option>Cédula</option>
                  <option>Pasaporte</option>
                  <option>Identificador del exterior</option>
                  <option>Consumidor final</option>
                  <option>PLACA</option>
                </select>
                {errors.identificador &&<span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Razón social:</label>
                <input type="text" {...register("razonsocial", {required:true})}/>
                {errors.razonsocial && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Dirección:</label>
                <input type="text" {...register("direccion", {required:true})}/>
                {errors.direccion && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Teléfono:</label>
                <input type="text" {...register("telefono", {required:true})}/>
                {errors.telefono && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Correo:</label>
                <input type="email" {...register("correo", {required:true})}/>
                {errors.correo && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Extranjero:</label>
                <input type="checkbox"></input>
              </FactDiv>
            </FactPartLeft>
            <FactPartRight>
              <h5>Establecimiento:</h5>
              <NumFactDiv>
                <p>No. Factura 001-002-000000001</p>
              </NumFactDiv>
              <FactDiv>
                <label>Fecha de emisión:</label>
                <input type="text" {...register("fechaemision", {required:true})}/>
                {errors.fechaemision && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Nombre comercial:</label>
                <input type="text" {...register("nombrecomercial", {required:true})}/>
                {errors.nombrecomercial && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Punto de emisión:</label>
                <input type="text" {...register("puntoemision", {required:true})}/>
                {errors.puntoemision && <span>*</span>}
              </FactDiv>
              <FactDiv>
                <label>Guia de emisión:</label>
                <input type="text" {...register("guiaemision")}/>
              </FactDiv>
              <FactDiv>
                <label>Factura comercial negociable:</label>
                <input type="checkbox" />
              </FactDiv>
            </FactPartRight>
          </FactPartOne>
          <FactPartTwo>
            <hr />
            <TablaBuscar />
            <hr />
          </FactPartTwo>
          <FactPartThree>
            <FactPartLeft>
              <h5>Formas de pago:</h5>
              <FormasPago />
              <br />
              <hr />
              <h5>Campos Adicionales:</h5>
              <CamposAdicionales />
            </FactPartLeft>
            <FactPartRight>
              <TablaValores />
            </FactPartRight>
          </FactPartThree>
          <ButtonSubmit
            classIconId={"bi bi-receipt-cutoff"}
            submitText={"Crear Factura"}
            onClick = {dataSubmit}
          />
        </FactSubBody>
      </FactBody>
    </FactComplete>
  );
};

export default CrearNuevaFactura;