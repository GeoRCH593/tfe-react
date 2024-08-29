import { GlobalStyle } from "../../../styles/globalStyles";
import {
  CheckboxDiv,
  FormComplete,
  FormDiv,
  FormDivSpan,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import { useForm } from "react-hook-form";

const Modul = "Proveedores";
const IconName = "bi bi-person-rolodex";
const SubPageTitle = "Ingresar Nuevo proveedor";

const CrearProveedor = () => {
  
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
            <input type="text" {...register("numeroId", { required: true })} />
            {errors.numeroId && (
              <span>* El número de identificación es obligatorio</span>
            )}
          </FormDivSpan>
          <FormDivSpan>
            <label>Tipo de cliente:</label>
            <input type="text" {...register("cliente", { required: true })} />
            {errors.cliente && <span>* El tipo de cliente es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input
              type="text"
              {...register("razonSocial", { required: true })}
            />
            {errors.razonSocial && (
              <span>* La razón social es obligatorio</span>
            )}
          </FormDivSpan>
          <FormDivSpan>
            <label>Dirección:</label>
            <input type="text" {...register("direccion", { required: true })} />
            {errors.direccion && <span>* La direccción es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Provincia:</label>
            <input type="text" {...register("provincia", { required: true })} />
            {errors.provincia && <span>* La provincia es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Cantón:</label>
            <input type="text" {...register("canton", { required: true })} />
            {errors.canton && <span>* El cantón es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono", { required: true })} />
            {errors.telefono && (
              <span>* El número de teléfono es obligatorio</span>
            )}
          </FormDivSpan>
          <FormDivSpan>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo", { required: true })} />
            {errors.correo && (
              <span>* El correo electrónico es obligatorio</span>
            )}
          </FormDivSpan>
          <CheckboxDiv>
            <input type="checkbox"></input>
            <label>Extranjero</label>
          </CheckboxDiv>
          <ButtonSubmit
            classIconId={"bi bi-person-plus-fill"}
            submitText={"Crear nuevo proveedor"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearProveedor;
