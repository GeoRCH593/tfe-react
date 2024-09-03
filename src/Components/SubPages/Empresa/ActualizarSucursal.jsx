import { GlobalStyle } from "../../../styles/common/globalStyles";
import {PageBody, TitlePage, FormTitle, FormComplete, FormDiv, FormDivSpan} from '../../../styles/Subpages/subpagesStyles';
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";
import provincias from '../../services/provincias.js';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

const Modul = "Empresa";
const IconName = "bi bi-building-fill";
const SubPageTitle = "Actualizar Datos de Sucursal";


const ActualizarSucursal = () => {

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


  const categoriaSeleccionada = watch("provinciasucursal");
  const cantonSeleccionado = watch("cantonsucursal");

  const categoriaSeleccionada2 = watch("provinciaempresa");
  const cantonSeleccionado2 = watch("cantonempresa");


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
            <label>Codigo de Emisión SRI:</label>
            <input type="text" {...register("codigoSRI")}
              defaultValue={"SRI001"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Nombre de la Sucursal:</label>
            <input type="text" {...register("sucursal")}
              defaultValue={"sucursal 001"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Dirección de la sucursal:</label>
            <input type="text" {...register("direccionsucursal")}
            defaultValue={"Calle 1 y Calle 2"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDivSpan>
            <label>Provincia de la sucursal:</label>
            <select
              id="provincia"
              value={categoriaSeleccionada}
              {...register("provinciasucursal", { required: true })}
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
            <label>Cantón de la sucursal:</label>
            <select
              id="canton"
              value={cantonSeleccionado}
              {...register("cantonsucursal", { required: true })}
            >
              <option value={""}>Selecciona un cantón</option>
              {datos.find((item) => item.nombre === categoriaSeleccionada)
                ?.cantones.map((canton) => (
                  <option key={canton} value={canton}>
                    {canton}
                  </option>
                ))}
            </select>
            {errors.canton && <span>* El cantón es obligatorio</span>}
          </FormDivSpan>
          <FormDiv>
            <label>Dirección de la empresa:</label>
            <input type="text" {...register("direccionempresa")}
              defaultValue={"Calle 3 y Calle 4"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDivSpan>
            <label>Provincia de la empresa:</label>
            <select
              id="provincia"
              value={categoriaSeleccionada2}
              {...register("provinciaempresa", { required: true })}
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
            <label>Cantón de la empresa:</label>
            <select
              id="canton"
              value={cantonSeleccionado2}
              {...register("cantonempresa", { required: true })}
            >
              <option value={""}>Selecciona un cantón</option>
              {datos.find((item) => item.nombre === categoriaSeleccionada2)
                ?.cantones.map((canton) => (
                  <option key={canton} value={canton}>
                    {canton}
                  </option>
                ))}
            </select>
            {errors.canton && <span>* El cantón es obligatorio</span>}
          </FormDivSpan>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono")}
              defaultValue={"+593 987654321"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo")}
              defaultValue={"giovanirod@gmail.com"}
            />
            <ModifyButton />
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualzar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarSucursal;