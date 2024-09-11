import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  FormComplete,
  FormDivSpan,
  FormTitle,
  PageBody,
  TitlePage,
  CheckboxDiv,
} from "../../../styles/Subpages/subpagesStyles";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import provincias from "../../services/provincias.js";
import { useEffect, useState } from "react";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear una empresa";

const CrearEmpresa = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    console.log(provincias);
    setDatos(provincias.provincias);
  }, []);


  const categoriaSeleccionada = watch("provincia");
  const cantonSeleccionado = watch("canton");

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
            {errors.identificador && <span>* Seleccionar una opción</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroid", { required: true })} />
            {errors.numeroid && <span>* La identificación es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input
              type="text"
              {...register("razonSocial", { required: true })}
            />
            {errors.razonSocial && (
              <span>* La razón social es obligatoria</span>
            )}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input
              type="text"
              {...register("nombreComercial", { required: true })}
            />
            {errors.nombreComercial && (
              <span>* El nombre comercial es obligatorio</span>
            )}
          </FormDivSpan>
          <FormDivSpan>
            <label>Dirección de la empresa:</label>
            <input type="text" {...register("direccion", { required: true })} />
            {errors.direccion && <span>* La dirección es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Provincia:</label>
            <select
              id="provincia"
              value={categoriaSeleccionada}
              {...register("provincia", { required: true })}
            >
              <option value={""}>Selecciona una provincia</option>
              {datos.map((item) => (
                <option key={item.nombre} value={item.nombre}>
                  {item.nombre}
                </option>
              ))}
            </select>
            {errors.provincia && <span>* La provincia es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Cantón:</label>
            <select
              id="canton"
              value={cantonSeleccionado}
              {...register("canton", { required: true })}
            >
              <option value={""}>Selecciona un cantón</option>
              {datos
                .find((item) => item.nombre === categoriaSeleccionada)
                ?.cantones.map((canton) => (
                  <option key={canton} value={canton}>
                    {canton}
                  </option>
                ))}
            </select>
            {errors.canton && <span>* El cantón es obligatorio</span>}
          </FormDivSpan>
          <CheckboxDiv>
            <input type="checkbox" {...register("extranjero")} />
            <label>Extranjero</label>
          </CheckboxDiv>
          <FormDivSpan>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono", { required: true })} />
            {errors.telefono && <span>* El teléfono es obligatorio</span>}
          </FormDivSpan>
          <CheckboxDiv>
            <input type="checkbox" {...register("llevar contabilidad")} />
            <label>Obligado a llevar contabilidad</label>
          </CheckboxDiv>
          <FormDivSpan>
            <label>Subir imagen de logotipo:</label>
            <input type="file" {...register("logotipo")} />
          </FormDivSpan>
          <FormDivSpan>
            <label>Correo electrónico:</label>
            <input
              type="email"
              {...register("correo", { required: true })}
            ></input>
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