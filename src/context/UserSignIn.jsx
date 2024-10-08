import {
  SignInBody,
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
  ForgotPass,
  NewUser,
  FormSignIn,
  FormSignDiv,
} from "../styles/ContextStyles/userSignIn";
import { GlobalStyle } from "../styles/common/globalStyles";
import BillieIcon from "../assets/billie-icon-white-green.svg";
import ButtonContext from "../Components/Context/ButtonContext";
import { useForm } from "react-hook-form";

const UserSignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <SignInBody>
      <GlobalStyle />
      <FormContainer>
        <TitleContainer>
          <IconLogo src={BillieIcon}></IconLogo>
          <TitleForm>Ingrese sus datos:</TitleForm>
        </TitleContainer>
        <FormSignIn onSubmit={dataSubmit}>
          <FormSignDiv>
            <label>Usuario:</label>
            <input type="text" {...register("usuario", { 
              required: {
                value: true, 
                message: "* Introduzca el usuario"
                },
                })} />
            {errors.usuario && <span>{errors.usuario.message}</span>}
          </FormSignDiv>
          <FormSignDiv>
            <label>Contraseña:</label>
            <input
              type="password"
              {...register("contrasena", { 
                required: {
                  value: true, 
                  message: "* Introduzca una contraseña",
                  },  
                })}
            />
            {errors.contrasena && <span>{errors.contrasena.message}</span>}
          </FormSignDiv>
          <ForgotPass>¿Olvidaste tu contraseña?</ForgotPass>
          <ButtonContext titleText={"ACCEDER"}></ButtonContext>
        </FormSignIn>
        <NewUser>
          <p>¿No tienes una cuenta?</p>
          <a>¡Créa una nueva!</a>
        </NewUser>
      </FormContainer>
    </SignInBody>
  );
};

export default UserSignIn;
