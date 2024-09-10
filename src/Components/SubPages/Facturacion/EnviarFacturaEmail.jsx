import { GlobalStyle } from "../../../styles/common/globalStyles.js";
import {PageBody, TitlePage, FormTitle, FormComplete, SubTitleList, TableGeneral, FormDivSpan} from '../../../styles/Subpages/subpagesStyles';
import ButtonSubmit from "../../Buttons/ButtonSubmit.jsx";
import { SearchFactDiv, SelectDiv } from "./facturacionStyles.js";
import Modals from '../../Modals/Modals';
import {ContentModal} from '../../Modals/modalStyle';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import ButtonNormal from "../../Buttons/ButtonNormal.jsx";

const Modul = "Facturación";
const IconName = "bi bi-receipt";
const SubPageTitle = "Enviar Factura por email";

const EnviarFacturaEmail = () => {
  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
  } = useForm();

  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    formState: {errors: errorsForm2},
  } = useForm();

  const dataSubmit = (data) => {
    console.log(data);
  };
  
  const dataSubmit2 = (data) => {
    console.log(data);
  };

  const [estado, setEstado] = useState(false);

  return (
    <PageBody>
      <GlobalStyle></GlobalStyle>
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={handleSubmitForm1(dataSubmit)}>
          <SubTitleList>
            <h5>Seleccionar campos: </h5>
          </SubTitleList>
          <SearchFactDiv>
            <SelectDiv>
              <label>Tipo de factura</label>
              <select id="tipofactura" {...registerForm1("tipofactura")}>
                <option>Emitido</option>
                <option>Borrador</option>
              </select>
              {errorsForm1.tipofactura && <span>* Obligatorio</span>}
            </SelectDiv>
            <SelectDiv>
              <label>Ambiente</label>
              <select id="ambientefactura" {...registerForm1("ambientefacture")}>
                <option>Prueba</option>
                <option>Produccion</option>
              </select>
            </SelectDiv>
            <SelectDiv>
              <label>Fecha desde:</label>
              <input type="date" {...registerForm1("fechadesde")}/>
            </SelectDiv>
            <SelectDiv>
              <label>Fecha hasta:</label>
              <input type="date" {...registerForm1("fechahasta")}/>
            </SelectDiv>
          </SearchFactDiv>
          <ButtonSubmit
            classIconId={"bi bi-search"}
            submitText={"Buscar factura"}
          />
          <hr />
          <SubTitleList>
            <h5>Resultados: </h5>
          </SubTitleList>
          <TableGeneral>
            <thead>
              <tr>
                <th>Código:</th>
                <th>Cliente:</th>
                <th>Monto:</th>
                <th>Autorización:</th>
                <th>Ambiente:</th>
                <th>Tipo:</th>
                <th>Descargar</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FR002</td>
                <td>Empresa 1</td>
                <td>$ 230.00</td>
                <td>05-06-2024</td>
                <td>Producción</td>
                <td>Factura</td>
                <td>
                  <i className="bi bi-download"> Guardar</i>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal
            classIconId={"bi bi-envelope-paper"}
            textButton={"Enviar a correo"}
            onClick={() => setEstado(!estado)}
          />
        </FormComplete>
      </div>
      {/* Modal para crear sucursal nueva*/}
      {estado && (
      <Modals
        title={"Datos de envío a correo:"}
        funcioncerrar={() => setEstado(!estado)}
        onSubmit={handleSubmitForm2(dataSubmit2)}
      >
        <ContentModal>
          <div>
            <FormDivSpan>
              <label>Correo:</label>
              <input
                type="email"
                {...registerForm2("correo", { required: true })}
              />
              {errorsForm2.correo && 
                <span>* Necesario el código de emisión </span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>CC:</label>
              <input
                type="email"
                {...registerForm2("copia", { required: true })}
              />
              {errorsForm2.copia && <span>* El nombre de sucursal es obligatorio</span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Asunto:</label>
              <input
                type="text"
                {...registerForm2("asunto", { required: true })}
              />
              {errorsForm2.asunto && <span>* La dirección de la sucursal es obligatoria</span>}              
            </FormDivSpan>
          </div>
        </ContentModal>
      </Modals>
      )}
    </PageBody>
  );
};

export default EnviarFacturaEmail;