import { GlobalStyle } from "../../../styles/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
  TableGeneral,
  FormDivSpan,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import EditButton from "../../Buttons/EditButton";
import { useForm } from "react-hook-form";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear Sucursal";

const CrearSucursal = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
            <input
              type="text"
              {...register("numeroId", { required: true })}
            />
            {errors.numeroId && <span>* El numero de Id es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input type="text" {...register("razonSocial", {required: true})}/>
            {errors.razonSocial && <span>* La razon social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombreComercial", {required: true})}/>
            {errors.nombreComercial && <span>* El nombre comercial es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit
            classIconId={"bi bi-search"}
            submitText={"Busqueda Empresa"}
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
          <br />
          <hr />
          <TableGeneral>
            <thead>
              <tr>
                <th>Código</th>
                <th>Empresa</th>
                <th>Sucursal</th>
                <th>Dirección</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Empresa Cia Ltda 1</td>
                <td>Nombre sucursal 1</td>
                <td>Calle 1 y Calle 2</td>
                <td>
                  <EditButton onClick={() => alert("Editar Empresa")} />
                </td>
              </tr>
            </tbody>
          </TableGeneral>
          <ButtonNormal
            classIconId={"bi bi-shop-window"}
            textButton={"Crear Sucursal"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearSucursal;
