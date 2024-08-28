import {
  SignInBody,
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
  ForgotPass,
  NewUser,
} from "../styles/ContextStyles/userSignIn";
import { GlobalStyle } from "../styles/globalStyles";
import BillieIcon from "../assets/billie-icon-white-green.svg";
import InputContext from "../Components/Context/InputContext";
import ButtonContext from "../Components/Context/ButtonContext";
import { useForm } from "react-hook-form";

const UserSignIn = () => {

  const {register} = useForm()

  return (
    <SignInBody>
      <GlobalStyle />
      <FormContainer>
        <TitleContainer>
          <IconLogo src={BillieIcon}></IconLogo>
          <TitleForm>Ingrese sus datos:</TitleForm>
        </TitleContainer>
        <form>
          <InputContext
            nameLabel={"Usuario"}
            user={"Usuario"}
            name="user"
            type={"text"}
            placeholder={"Ingrese usuario o correo"}
            {...register("nombre")}
          />
          <InputContext
            nameLabel={"Contraseña"}
            user={"Contraseña"}
            name="pass"
            type={"password"}
            placeholder={"Ingrese contraseña"}
            {...register("password")}
          />
          <ForgotPass>¿Olvidaste tu contraseña?</ForgotPass>
          <ButtonContext
            onClick={() => alert("Enviaste información")}
            title={"ACCEDER"}
          ></ButtonContext>
        </form>
        <NewUser>
          <p>¿No tienes una cuenta?</p>
          <a>¡Créa una nueva!</a>
        </NewUser>
      </FormContainer>
    </SignInBody>
  );
};

export default UserSignIn;