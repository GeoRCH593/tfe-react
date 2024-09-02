import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  PageBody,
  TitlePage,
  FormTitle,
  FormComplete,
  FormDiv,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import ModifyButton from "../../Buttons/ModifyButton";
import { useForm } from "react-hook-form";

const Modul = "Empresa";
const IconName = "bi bi-person-lines-fill";
const SubPageTitle = "Actualizar datos de cliente";

const ActualizarClientes = () => {
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
              <option>Nombre</option>
            </select>
            <ModifyButton />
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
            <select id="cliente" {...register("cliente")} >
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
            <label>Dirección:</label>
            <input type="text" {...register("direccion")}
            defaultValue={"Avenida 1 y calle 2"}
            />
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
            <FormDiv>
              <label>
                <input type="checkbox"></input>
                Obligado a llevar contabilidad:
              </label>
            </FormDiv>
            <FormDiv>
              <label>
                <input type="checkbox"/>
                Extranjero
              </label>
            </FormDiv>
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-arrow-left-right"}
            submitText={"Actualizar clientes"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default ActualizarClientes;
