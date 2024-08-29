import { useForm } from "react-hook-form";
import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Busqueda de empresa";

const BusquedaEmpresa = () => {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <PageBody>
      <GlobalStyle />
      <TitlePage>
        <i className={IconName}></i>
        <h2>Módulo: {Modul}</h2>
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={dataSubmit}>
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId", {required:true})} />
            {errors.numeroId && <span>* El número de identificación es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input type="text" {...register("razonSocial", {required:true })}/>
            {errors.razonSocial && <span>* La razón social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombreComercial", {required:true})}/>
            {errors.nombreComercial && <span>* El nombre comercial es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit
            classIconId={"bi bi-search"}
            submitText={"Buscar"}
          />
          <hr />
          <br />
          <TableGeneral>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Empresa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RUC: 0123456789</td>
                <td>Empresa Cia Ltda 1</td>
              </tr>
            </tbody>
          </TableGeneral>
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default BusquedaEmpresa;
