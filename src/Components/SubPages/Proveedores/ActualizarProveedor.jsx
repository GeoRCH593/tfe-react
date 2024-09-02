import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  CheckboxDiv,
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
  TitlePage,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";
import {useForm} from 'react-hook-form';

const Modul = "Proveedores";
const IconName = "bi bi-person-rolodex";
const SubPageTitle = "Actualizar datos del proveedor";

const ActualizarProveedor = () => {

  const { register, handleSubmit } = useForm();

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
            <label>Tipo de identificación:</label>
            <select id="identificador" {...register("identificador")}>
              <option>R.U.C</option>
              <option>Cédula</option>
              <option>Pasaporte</option>
              <option>Identificador del exterior</option>
              <option>Consumidor final</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Número de Indentificación:</label>
            <input type="text" {...register("numeroId")}
              defaultValue={"0123456789"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Tipo de cliente:</label>
            <select id="cliente" {...register("cliente")}>
              <option>Persona natural</option>
              <option>Empresa</option>
            </select>
          </FormDiv>
          <FormDiv>
            <label>Razón Social:</label>
            <input type="text" {...register("razonsocial")}
              defaultValue={"Geovanny Rodriguez"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Dirección:</label>
            <input type="text" {...register("direccion")}
              defaultValue={"Calle 1 y calle 2"}
            />
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Provincia:</label>
            <input type="text" {...register("provincia")}/>
            <ModifyButton />
          </FormDiv>
          <FormDiv>
            <label>Canton:</label>
            <input type="text" {...register("canton")}/>
            <ModifyButton />
          </FormDiv>
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
            <CheckboxDiv>
            <input type="checkbox" {...register("llevar contabilidad")} />
            <label>Obligado a llevar contabilidad</label>
          </CheckboxDiv>
          <CheckboxDiv>
            <input type="checkbox" {...register("llevar contabilidad")} />
            <label>Extranjero</label>
          </CheckboxDiv>
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualizar"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarProveedor;
