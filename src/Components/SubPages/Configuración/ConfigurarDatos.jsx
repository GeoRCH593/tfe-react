import { GlobalStyle } from "../../../styles/common/globalStyles";
import {CheckboxDiv, FormComplete, FormDiv, FormTitle, PageBody, TitlePage, FormDivSpan} from '../../../styles/Subpages/subpagesStyles';
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";
import {useForm} from 'react-hook-form';
import provincias from '../../services/provincias.js';
import {useEffect, useState} from 'react';

const Modul = "Configuración";
const IconName = "bi bi-gear-fill";
const SubPageTitle = "Actualizar datos del proveedor";

const ConfigurarDatos = () => {

  const { register, handleSubmit, watch } = useForm();

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
            <label>Tipo de identificación:</label>
            <select id="identificador" {...register("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId")}
              defaultValue={"0987654321"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Tipo de cliente:</label>
            <select id="cliente" {...register("cliente")}>
              <option>Persona natural</option>
              <option>Empresa</option>
            </select>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text" {...register("razonsocial")}
            defaultValue={"Geovanny Rodriguez"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Dirección del emisor:</label>
            <input type="text" {...register("direccion")}
            defaultValue={"Calle 1 y calle 2"}
            />
            <ModifyButton />
          </FormDiv>
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
          </FormDivSpan>
          <FormDiv>
            <label>Teléfono:</label>
            <input type="tel" {...register("telefono")}
              defaultValue={"+593 98 765 4321"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo")}
              defaultValue={"giovanirod@gmail.com"}
            />
            <ModifyButton />
            <CheckboxDiv>
              <input type="checkbox" {...register("extranjero")} />
              <label>Extranjero</label>
            </CheckboxDiv>
            <CheckboxDiv>
              <input type="checkbox" {...register("contribuyente")}/>
              <label>Contribuyente especial</label>
            </CheckboxDiv>
            <CheckboxDiv>
              <input type="checkbox" {...register("rimpe")}/>
              <label>Régimen Rimpe</label>
            </CheckboxDiv>
            <CheckboxDiv>
              <input type="checkbox" {...register("contabilidad")}/>
              <label>Obligado a llevar contabilidad</label>
            </CheckboxDiv>
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-floppy"}
            submitText={"Guardar cambios"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ConfigurarDatos;