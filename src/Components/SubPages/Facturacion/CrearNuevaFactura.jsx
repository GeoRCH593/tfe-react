import {
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import {
  FactBody,
  FactComplete,
  FactDiv,
  FactPartLeft,
  FactPartOne,
  FactPartRight,
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

const Modul = "Facturación";
const IconClass = "bi bi-receipt";
const SubPageTitle = "Crear nueva factura";

const CrearNuevaFactura = () => {
  return (
    <FactComplete>
      <FactBody>
        <TitlePage>
          <i className={IconClass}></i>
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
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Identificación:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Tipo:</label>
                <select id="identificador" name="tipo identificador">
                  <option>R.U.C</option>
                  <option>Cédula</option>
                  <option>Pasaporte</option>
                  <option>Identificador del exterior</option>
                  <option>Consumidor final</option>
                </select>
              </FactDiv>
              <FactDiv>
                <label>Razón social:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Dirección:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Teléfono:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Correo:</label>
                <input type="email"></input>
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
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Nombre comercial:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Punto de emisión:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Guia de emisión:</label>
                <input type="text"></input>
              </FactDiv>
              <FactDiv>
                <label>Factura comercial negociable:</label>
                <input type="checkbox"></input>
              </FactDiv>
            </FactPartRight>
          </FactPartOne>
          <div className="part-two">
            <hr />
            <TablaBuscar />
            <hr />
          </div>
          <FactPartTwo>
            <FactPartLeft>
              <h5>Formas de pago</h5>
              <FormasPago />
              <br />
              <hr />
              <h5>Campos Adicionales:</h5>
              <CamposAdicionales />
            </FactPartLeft>
            <FactPartRight>
              <TablaValores />
            </FactPartRight>
          </FactPartTwo>
          <ButtonSubmit
            IconClass={"bi bi-receipt-cutoff"}
            submitText={"Crear Factura"}
          />
        </FactSubBody>
      </FactBody>
    </FactComplete>
  );
};

export default CrearNuevaFactura;
