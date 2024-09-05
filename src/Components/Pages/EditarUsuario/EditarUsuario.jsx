import { TitlePage } from "../../../styles/menuStyles/menu";
import BillieLogo from "../../../assets/billie-logo-black-green.svg";
import { GlobalStyle } from "../../../styles/common/globalStyles";
import {
  FormComplete,
  FormDiv,
  FormTitle,
  PageBody,
} from "../../../styles/Subpages/subpagesStyles";
import ButtonSubmit from "../../Buttons/ButtonSubmit";
import { useForm } from "react-hook-form";
import ModifyButton from "../../Buttons/ModifyButton";

const SubPageTitle = "Editar datos de la cuenta";

const EditarUsuario = () => {
  
  const { register, handleSubmit, reset } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PageBody>
      <GlobalStyle />
      <TitlePage>
        <img src={BillieLogo} />
      </TitlePage>
      <div>
        <FormTitle>
          <h5>{SubPageTitle}</h5>
        </FormTitle>
        <FormComplete onSubmit={dataSubmit}>
          <FormDiv>
            <label>Nombres:</label>
            <input type="text" {...register("nombres")} 
              defaultValue={"Geovanny Xavier"}
            />

            <ModifyButton botonFuncion={()=> reset({nombres:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Apellidos:</label>
            <input type="text" {...register("apellidos")} 
              defaultValue={"Rodríguez Chiriboga"}
            />
            <ModifyButton botonFuncion={()=> reset({apellidos:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Nombre del usuario:</label>
            <input type="text" {...register("usuario")} 
              defaultValue={"Geova593"}
            />
            <ModifyButton botonFuncion={()=> reset({usuario:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Correo electrónico:</label>
            <input type="email" {...register("correo")} 
              defaultValue={"giovanirod@gmail.com"}
            />
            <ModifyButton botonFuncion={()=> reset({correo:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Contraseña:</label>
            <input type="password" {...register("pass")} 
              defaultValue={"123456"}
            />
            <ModifyButton botonFuncion={()=> reset({pass:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Confirmar contraseña:</label>
            <input type="password" {...register("confirmarpass")} 
              defaultValue={"123456"}
            />
            <ModifyButton botonFuncion={()=> reset({confirmarpass:""})}/>
          </FormDiv>
          <FormDiv>
            <label>Subir imagen de logotipo:</label>
            <input type="file" {...register("logotipo")} />
          </FormDiv>
          <ButtonSubmit
            classIconId={"bi bi-pencil-square"}
            submitText={"Actualzar Datos"}
          />
        </FormComplete>
      </div>
    </PageBody>
  );
};

export default EditarUsuario;