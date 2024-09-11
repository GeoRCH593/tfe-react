import { useForm } from "react-hook-form";
import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Busqueda de sucursal";

const BuscarSucursal = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const dataSubmit = handleSubmit((data)=>{
    console.log(data)
  })

  return (
    <PageBody>
      <GlobalStyle/>
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={dataSubmit}>
          <FormDivSpan>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador",{required:true})}>
              <option value={""}>Seleccionar opción</option>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            {errors.identificador && <span>* Obligatorio seleccionar una opción</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId", {required:true})}/>
            {errors.numeroId && <span>* El número de identificación es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input type="text" {...register("razonSocial", {required:true})}/>
            {errors.razonSocial && <span>* La razón social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombreComercial", {required:true})}/>
            {errors.nombreComercial && <span>* El nombre comercial es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit 
           classIconId={"bi bi-search"} 
           submitText={"Buscar Empresa"}
          />
          <br />
          <hr />
          <TableGeneral>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Empresa</th>
                <th>Razón Social</th>
                <th>Selección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Geovanny Rodríguez</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <hr />
          <div>
            <h5>Lista de Sucursales:</h5>
          </div>
          <br />
          <TableGeneral>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursal</th>
                <th>Dirección</th>
                <th>Provincia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Nombre sucursal 1</td>
                <td>Calle 1 y Calle 2</td>
                <td>Azuay</td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal
            classIconId={"bi bi-search"}
            textButton={"Buscar Sucursal"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BuscarSucursal;