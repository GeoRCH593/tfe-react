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
import ButtonNormal from "../../Buttons/ButtonNormal";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import EditButton from "../../Buttons/EditButton";
import { useForm } from "react-hook-form";
import Modals from "../../Modals/Modals";
import {ContentModal} from '../../Modals/modalStyle';
import { useState, useEffect } from "react";
import provincias from "../../services/provincias.js";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear Sucursal";

const CrearSucursal = () => {

  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
  } = useForm();

  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    watch,
    formState: {errors: errorsForm2},
  } = useForm();


  const dataSubmit = (data) => {
    console.log(data);
  };
  
  const dataSubmit2 = (data) => {
    console.log(data);
  };

  const [datos, setDatos] = useState([]);
  const [estado, setEstado] = useState(false);

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
        <FormComplete name="formulariobusqueda" onSubmit={handleSubmitForm1(dataSubmit)}>
          <FormDiv>
            <label>Ingrese tipo de identificación:</label>
            <select id="identificador" {...registerForm1("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDivSpan>
            <label>Número de Indentificación:</label>
            <input type="text" {...registerForm1("numeroId", { required: true })} />
            {errorsForm1.numeroId && <span>* El numero de Id es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Razón Social:</label>
            <input
              type="text"
              {...registerForm1("razonSocial", { required: true })}
            />
            {errorsForm1.razonSocial && 
              <span>* La razon social es obligatoria</span>}
          </FormDivSpan>
          <FormDivSpan>
            <label>Nombre comercial de la empresa:</label>
            <input
              type="text"
              {...registerForm1("nombreComercial", { required: true })}
            />
            {errorsForm1.nombreComercial &&
              <span>* El nombre comercial es obligatorio</span>
            }
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
            onClick={() => setEstado(!estado)}
          />
        </FormComplete>
      </div>
      {/* Modal para crear sucursal nueva*/}
      {estado && (
      <Modals
        title={"Crear Sucursal:"}
        funcioncerrar={() => setEstado(!estado)}
        onSubmit={handleSubmitForm2(dataSubmit2)}
      >
        <ContentModal>
          <div>
            <FormDivSpan>
              <label>Codigo emision SRI:</label>
              <input
                type="text"
                {...registerForm2("sucursalcodigosri", { required: true })}
              />
              {errorsForm2.sucursalcodigossri && 
                <span>* Necesario el código de emisión </span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Nombre de sucursal:</label>
              <input
                type="text"
                {...registerForm2("sucursalnombre", { required: true })}
              />
              {errorsForm2.sucursalnombre && <span>* El nombre de sucursal es obligatorio</span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Dirección:</label>
              <input
                type="text"
                {...registerForm2("sucursaldireccion", { required: true })}
              />
              {errorsForm2.sucursaldireccion && <span>* La dirección de la sucursal es obligatoria</span>}              
            </FormDivSpan>
            <FormDivSpan>
              <label>Provincia:</label>
              <select
                id="provincia"
                value={categoriaSeleccionada}
                {...registerForm2("provincia", { required: true })}
              >
                <option value={""}>Selecciona una provincia</option>
                {datos.map((item) => (
                  <option key={item.nombre} value={item.nombre}>
                    {item.nombre}
                  </option>
                ))}
              </select>
              {errorsForm2.provincia && <span>* La provincia es obligatoria</span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Cantón:</label>
              <select
                id="canton"
                value={cantonSeleccionado}
                {...registerForm2("canton", { required: true })}
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
              {errorsForm2.canton && <span>* El cantón es obligatorio</span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Teléfono:</label>
              <input
                type="text"
                {...registerForm2("sucursaltelefono", { required: true })}
              />
              {errorsForm2.sucursaltelefono && <span>* El teléfono de la sucursal es obligatorio</span>}
            </FormDivSpan>
            <FormDivSpan>
              <label>Correo electrónico:</label>
              <input
                type="text"
                {...registerForm2("sucursalcorreo", { required: true })}
              />
            </FormDivSpan>
          </div>
        </ContentModal>
      </Modals>
      )}
    </PageBody>
  );
};

export default CrearSucursal;