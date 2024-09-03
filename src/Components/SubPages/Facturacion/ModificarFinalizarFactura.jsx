import {
  TitlePage,
  SubTitleList,
} from "../../../styles/Subpages/subpagesStyles";
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
  TwoButtonDiv,
  SearchFactDiv,
  SelectDiv,
} from "./facturacionStyles.js";
import FormasPago from "../../Forms/Facturacion/FormasPago.jsx";
import CamposAdicionales from "../../Forms/Facturacion/CamposAdicionales.jsx";
import TablaValores from "../../Forms/Facturacion/TablaValores.jsx";
import TablaBuscar from "../../Forms/Facturacion/TablaBuscar.jsx";
import ButtonSubmit from "../../Buttons/ButtonSubmit.jsx";
import ModifyButton from "../../Buttons/ModifyButton.jsx";
import { useForm } from "react-hook-form";
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";

const Modul = "Facturación";
const IconName = "bi bi-receipt";
const SubPageTitle = "Modificar y finalizar factura en borrador";

const ModificarFinalizarFactura = () => {
  const { register, handleSubmit } = useForm();

  return (
    <FactComplete>
      <FactBody>
        <TitlePage>
          <i className={IconName}></i>
          <h2>Módulo: {Modul}</h2>
        </TitlePage>
        <TitleSubpage>
          <h5>{SubPageTitle}</h5>
        </TitleSubpage>
        <FactSubBody onSubmit={handleSubmit}>
          <SubTitleList>
            <h5>Seleccionar parámetros de busqueda: </h5>
          </SubTitleList>
          <SearchFactDiv>
            <SelectDiv>
              <label>Tipo de factura</label>
              <select id="factura" {...register("tipofactura")}>
                <option>Emitido</option>
                <option>Borrador</option>
              </select>
            </SelectDiv>
            <SelectDiv>
              <label>Ambiente</label>
              <select id="ambiente" {...register("ambiente")}>
                <option>Prueba</option>
                <option>Produccion</option>
              </select>
            </SelectDiv>
            <SelectDiv>
              <label>Emitido desde:</label>
              <input type="date" {...register("emitidodesde")}/>
            </SelectDiv>
            <SelectDiv>
              <label>Emitido hasta:</label>
              <input type="date" {...register("emitidohasta")}/>
            </SelectDiv>
          </SearchFactDiv>
          <ButtonNormal
            classIconId={"bi bi-search"}
            textButton={"Buscar Factura"}
          />
          <FactPartOne>
            <FactPartLeft>
              <h5>Adquiriente:</h5>
              <FactDiv>
                <label>Cliente:</label>
                <input
                  type="text"
                  {...register("cliente")}
                  defaultValue={"Geovanny Rodriguez"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Tipo de identificación:</label>
                <select
                  id="tipoidentificador"
                  {...register("tipoidentificador")}
                >
                  <option>R.U.C</option>
                  <option>Cédula</option>
                  <option>Pasaporte</option>
                  <option>Identificador del exterior</option>
                  <option>Consumidor final</option>
                </select>
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Número de identificación:</label>
                <input
                  type="text"
                  {...register("numeroId")}
                  defaultValue={"0123456789"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Razón social:</label>
                <input
                  type="text"
                  {...register("razonsocial")}
                  defaultValue={"Geovanny Rodriguez"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Dirección:</label>
                <input
                  type="text"
                  {...register("direccion")}
                  defaultValue={"Calle 1 y calle 2"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Teléfono:</label>
                <input
                  type="text"
                  {...register("telefono")}
                  defaultValue={"+593 987654321"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Correo:</label>
                <input
                  type="email"
                  {...register("correo")}
                  defaultValue={"geovarod@gmail.com"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Extranjero:</label>
                <input type="checkbox" {...register("extranjero")} />
              </FactDiv>
            </FactPartLeft>
            <FactPartRight>
              <h5>Establecimiento:</h5>
              <NumFactDiv>
                <input type="text" value={"No. Factura 001-002-000000001"} />
              </NumFactDiv>
              <FactDiv>
                <label>Fecha de emisión:</label>
                <input type="date" {...register("fechaemision")} />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Nombre comercial:</label>
                <input
                  type="text"
                  {...register("nombrecomercial")}
                  defaultValue={"Comercial 1"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Punto de emisión:</label>
                <input type="date" {...register("punto de emision")} />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Guia de emisión:</label>
                <input
                  type="text"
                  {...register("giadeemision")}
                  defaultValue={"ejemplo 1"}
                />
                <ModifyButton />
              </FactDiv>
              <FactDiv>
                <label>Factura comercial negociable:</label>
                <input type="checkbox" {...register("facturacomercialnegociable")}/>
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
          <TwoButtonDiv>
            <ButtonSubmit
              classIconId={"bi bi-floppy"}
              submitText={"Guardar Modificación"}
            />
            <ButtonSubmit
              classIconId={"bi bi-file-earmark-check"}
              submitText={"Finalizar Factura"}
            />
          </TwoButtonDiv>
        </FactSubBody>
      </FactBody>
    </FactComplete>
  );
};

export default ModificarFinalizarFactura;
