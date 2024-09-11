import { useForm } from "react-hook-form";
import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  FormComplete,
  FormDivSpan,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";

const Modul = "Clientes";
const IconName = "bi bi-person-lines-fill";
const SubPageTitle = "Ingresar Cliente nuevo";

const CrearClientes = () => {
  
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
          <FormDivSpan>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...register("identificador", {required:true})}>
              <option value={""}>Seleccionar una opción</option>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            {errors.identificador && <span>* Obligatorio seleccionar opción</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId", {required:true})}/>
            {errors.numeroId && <span>* El número de identificación es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Tipo de cliente:</label>
            <input type="text" {...register("cliente", {required:true})}/>
            {errors.cliente && <span>* El tipo de cliente es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input type="text" {...register("razonSocial", {required:true})} />
            {errors.razonSocial && <span>* La razón social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Dirección:</label>
            <input type="text" {...register("direccion", {required:true})}/>
            {errors.direccion && <span>* La dirección es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono", {required:true})}/>
            {errors.telefono && <span>* El número de teléfono es obligatorio</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo", {required:true})}/>
            {errors.correo && <span>* El correo electrónico es obligatorio</span>}
          </FormDivSpan>
          <ButtonSubmit
            classIconId={"bi bi-person-add"}
            submitText={"Crear nuevo liente"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default CrearClientes;