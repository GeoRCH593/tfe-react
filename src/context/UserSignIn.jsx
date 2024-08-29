import {
  SignInBody,
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
  ForgotPass,
  NewUser,
  FormSignIn,
} from "../styles/ContextStyles/userSignIn";
import { GlobalStyle } from "../styles/globalStyles";
import BillieIcon from "../assets/billie-icon-white-green.svg";
import InputContext from "../Components/Context/InputContext";
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
          <InputContext
            nameLabel={"Usuario"}
            user={"Usuario"}
            name="user"
            type={"text"}
            placeholder={"Ingrese usuario o correo"}
            {...register("nombre", {required:true})}
          />
          {errors.nombre && <span>* El nombre es requerido</span>}
          <InputContext
            nameLabel={"Contraseña"}
            user={"Contraseña"}
            name="pass"
            type={"password"}
            placeholder={"Ingrese contraseña"}
            {...register("password", {required:true})}
          />
          {errors.password && <span>* La contraseña es requerida</span>}
          <ForgotPass>¿Olvidaste tu contraseña?</ForgotPass>
          <ButtonContext
            title={"ACCEDER"}
          ></ButtonContext>
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