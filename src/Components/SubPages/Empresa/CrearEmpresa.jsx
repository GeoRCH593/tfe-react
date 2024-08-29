import { GlobalStyle } from "../../../styles/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormDivSpan,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear una empresa";

const CrearEmpresa = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data)
  });

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
            <select
              id="identificador"{...register("identificador")}>
              <option value={"RUC"}>R.U.C</option>
              <option value={"cedula"}>Cédula</option>
              <option value={"pasaporte"}>Pasaporte</option>
              <option value={"id exterior"}>Identificador del exterior</option>
              <option value={"consumidor final"}>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroid", { required: true })} />
            {errors.numeroid && <span>* La identificación es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input
              type="text"
              {...register("razonSocial", { required: true })} />
            {errors.razonSocial && <span>* La razón social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombreComercial",  {required: true })} />
            {errors.nombreComercial && <span>* El nombre comercial es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Dirección de la empresa:</label>
            <input type="text" {...register("direccion", {required: true })} />
            {errors.direccion && <span>* La dirección es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Provincia:</label>
            <input type="text" {...register("provincia", {required: true})} />
            {errors.provincia && <span>* La provincia es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Cantón:</label>
            <input type="text" {...register("canton", {required: true })} />
            {errors.canton && <span>* El cantón es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>
              <input type="checkbox" {...register("extranjero")} />
              Extranjero
            </label>
          </FormDivSpan>
          <FormDivSpan>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono", {required: true })} />
            {errors.telefono && <span>* El teléfono es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>
              <input
                type="checkbox"
                {...register("obligado llevar contabilidad")}
              />
              Obligado a llevar contabilidad:
            </label>
          </FormDivSpan>
          <FormDivSpan>
            <label>Subir imagen de logotipo:</label>
            <input type="file" {...register("logotipo")} />
          </FormDivSpan>
          <FormDivSpan>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo", {required: true } )}></input>
            {errors.correo && <span>* El correo es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit
            classIconId={"bi bi-building-add"}
            submitText={"Crear Empresa"}
          />
        </FormComplete>
      </div>

    </PageBody>
  );
};

export default CrearEmpresa;
