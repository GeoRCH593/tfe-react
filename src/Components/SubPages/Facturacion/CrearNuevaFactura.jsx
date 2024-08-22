import {
  TitlePage,
  BtnContain,
  BtnSubmit,
  TableDeleteCompany,
} from "../../../styles/Subpages/subpagesStyles";
import "./crearFactura.css";
import {
  FactBody,
  FactDiv,
  TableSearch,
  TableValues,
  TitleSubpage,
} from "./facturacionStyles.js";

const Modul = "Facturación";
const IconClass = "bi bi-receipt";
const SubPageTitle = "Crear nueva factura";

const CrearNuevaFactura = () => {
  return (
    <FactBody>
      <div>
        <TitlePage>
          <i className={IconClass}></i>
          <h2>Módulo: {Modul}</h2>
        </TitlePage>
        <TitleSubpage>
          <h5>{SubPageTitle}</h5>
        </TitleSubpage>
        <div className="fact-sub">
          <div className="part-one">
            <div className="izq-part-one">
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
            </div>

            <div className="der-part-two">
              <h5>Establecimiento:</h5>
              <div>
                <p>No. Factura 001-002-000000001</p>
              </div>
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
            </div>
          </div>
          <div className="part-two">
            <hr />
            <TableSearch>
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
            </TableSearch>
            <hr />
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Buscar y añadir producto o servicio"
            />
          </div>
          <div className="part-three">
            <div className="izq-part-one">
              <h5>Formas de pago</h5>
              <TableDeleteCompany>
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
                      <i className="bi bi-pencil-fill">Editar</i>
                    </td>
                  </tr>
                </tbody>
              </TableDeleteCompany>
              <BtnContain>
                <BtnSubmit type="submit">Añadir Forma de pago</BtnSubmit>
              </BtnContain>
              <br />
              <hr />
              <h5>Campos Adicionales:</h5>
              <TableDeleteCompany>
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
                      <i className="bi bi-pencil-fill">Editar</i>
                    </td>
                  </tr>
                </tbody>
              </TableDeleteCompany>
              <BtnContain>
                <BtnSubmit type="submit">Añadir campo adicional</BtnSubmit>
              </BtnContain>
            </div>
            <div className="der-part-two">
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
          </div>
        </div>
      </div>
    </FactBody>
  );
};

export default CrearNuevaFactura;
