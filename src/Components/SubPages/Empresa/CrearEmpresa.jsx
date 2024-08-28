import { GlobalStyle } from "../../../styles/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModalAlert from "../../Modals/ModalAlert";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear una empresa";

const CrearEmpresa = () => {
  const [modalState, setModalState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isSubmit = (data) => console.log(data);

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
        <FormComplete onSubmit={handleSubmit(isSubmit)}>
          <FormDiv>
            <label htmlFor="id">Ingrese tipo de identificación:</label>
            <select
              id="identificador"
              name="tipo identificador"
              {...register("identificador")}
            >
              <option value={"RUC"}>R.U.C</option>
              <option value={"cedula"}>Cédula</option>
              <option value={"pasaporte"}>Pasaporte</option>
              <option value={"id exterior"}>Identificador del exterior</option>
              <option value={"consumidor final"}>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroid", { required: true })} />
            {errors.numeroid && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input
              type="text"
              {...register("razonSocial", { required: true })}
            />
            {errors.razonSocial && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombre",  {required: true })} />
            {errors.nombre && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text" {...register("direccion", {required: true })} />
            {errors.direccion && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text" {...register("provincia", {required: true})} />
            {errors.provincia && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>Cantón:</label>
            <input type="text" {...register("canton", {required:true })} />
            {errors.canton && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>
              <input type="checkbox" {...register("extranjero")} />
              Extranjero
            </label>
          </FormDiv>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono", {required: true })} />
            {errors.telefono && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <FormDiv>
            <label>
              <input
                type="checkbox"
                {...register("obligado llevar contabilidad")}
              />
              Obligado a llevar contabilidad:
            </label>
          </FormDiv>
          <FormDiv>
            <label>Subir imagen de logotipo:</label>
            <input type="file" {...register("logotipo", {required:true })} />
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo", {required:true } )}></input>
            {errors.correo && <span>* Este campo es obligatorio</span>}
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-building-add"}
            submitText={"Crear Empresa"}
          />
        </FormComplete>
      </div>
      <ModalAlert
        titulo={"Ingresar Datos"}
        subtitulo={"Porfavor ingresar datos en los campos"}
        estado={modalState}
        cambiarEstado={setModalState}
      />
    </PageBody>
  );
};

export default CrearEmpresa;
