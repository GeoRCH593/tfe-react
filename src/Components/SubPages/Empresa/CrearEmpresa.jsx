import { GlobalStyle } from "../../../styles/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonNormal from "../../Buttons/ButtonNormal";
import ModalAlert from "../../Modals/ModalAlert";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Modul = "Empresa";
const IconName = "bi bi-building";
const SubPageTitle = "Crear una empresa";

const CrearEmpresa = () => {
  const [modalState, setModalState] = useState(false);
  const { register } = useForm();

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
        <FormComplete>
          <FormDiv>
            <label htmlFor="id">Ingrese tipo de identificación:</label>
            <select id="identificador" name="tipo identificador"
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
            <label htmlFor="numero id">Número de Indentificación:</label>
            <input type="text" {...register("numero id")} />
          </FormDiv>
          <FormDiv>
            <label htmlFor="razon">Razón Social:</label>
            <input type="text" {...register("razon")} />
          </FormDiv>
          <FormDiv>
            <label htmlFor="nombre">Nombre comercial de la empresa:</label>
            <input type="text" {...register("nombre")}/>
          </FormDiv>
          <FormDiv>
            <label htmlFor="direccion">Dirección de la empresa:</label>
            <input type="text" {...register("direccion")}/>
          </FormDiv>
          <FormDiv>
            <label htmlFor="provincia">Provincia:</label>
            <input type="text" {...register("provincia")}/>
          </FormDiv>
          <FormDiv>
            <label htmlFor="canton">Cantón:</label>
            <input type="text" {...register("canton")}/>
          </FormDiv>
          <FormDiv>
            <label>
              <input type="checkbox"></input>
              Extranjero
            </label>
          </FormDiv>
          <FormDiv>
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" {...register("telefono")}/>
          </FormDiv>
          <FormDiv>
            <label>
              <input type="checkbox"></input>
              Obligado a llevar contabilidad:
            </label>
          </FormDiv>
          <FormDiv>
            <label>Subir imagen de logotipo:</label>
            <input type="file"></input>
          </FormDiv>
          <FormDiv>
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email"></input>
          </FormDiv>
          <ButtonNormal
            classIconId={"bi bi-building-add"}
            textButton={"Crear Empresa"}
            onClick={() => setModalState(!modalState)}
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
