import { GlobalStyle } from "../../../styles/common/globalStyles.js";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  SubTitleList,
  TableGeneral,
} from "../../../styles/Subpages/subpagesStyles";
import EditButton from "../../Buttons/EditButton.jsx";
import { SearchFactDiv } from "../Facturacion/facturacionStyles.js";
import { ConfDiv } from "./configuracionStyles.js";
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import {useForm} from 'react-hook-form';

const Modul = "Configuración";
const IconName = "bi bi-gear-fill";
const SubPageTitle = "Ingresar secuencial de la factura";

const IngresarSecuencial = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const dataSubmit = handleSubmit((data)=>{
    console.log(data)
  })

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
        <FormComplete onSubmit={dataSubmit}>
          <SubTitleList>
            <h5>Seleccionar campos: </h5>
          </SubTitleList>
          <SearchFactDiv>
            <ConfDiv>
              <label>Tipo de factura</label>
              <select id="tipofactura" {...register("tipofactura", {required:true})}>
                <option value={''}>Seleccionar...</option>
                <option>Emitido</option>
                <option>Borrador</option>
              </select>
              {errors.tipofactura && <span>* Obligatorio</span>}
            </ConfDiv>
            <ConfDiv>
              <label>Ambiente</label>
              <select id="ambientefactura" {...register("ambientefactura", {required:true})}>
                <option value={""}>Seleccionar...</option>
                <option>Prueba</option>
                <option>Produccion</option>
              </select>
              {errors.ambientefactura && <span>* Obligatorio</span>}
            </ConfDiv>
            <ConfDiv>
              <label>Fecha desde:</label>
              <input type="date" {...register("fechadesde", {required:true })}/>
              {errors.fechadesde && <span>* Obligatorio</span>}
            </ConfDiv>
            <ConfDiv>
              <label>Fecha hasta:</label>
              <input type="date" {...register("fechahasta", {required:true})}/>
              {errors.fechahasta && <span>* Obligatorio</span>}
            </ConfDiv>
          </SearchFactDiv>
          <ButtonSubmit
            classIconId={"bi bi-search"}
            submitText={"Buscar Factura"}
          />
          <br />
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
                <th>Estado:</th>
                <th>Secuencial</th>
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
                <td>Borrador</td>
                <td>
                  <EditButton onClick={()=> alert("Editar Secuencial")}/>
                </td>
                <td>Anular factura</td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonSubmit
            classIconId={"bi bi-floppy"}
            submitText={"Guardar cambios"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default IngresarSecuencial;