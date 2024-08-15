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

const UserSignIn = () => {
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
            user={"Usuario"}
            name="user"
            type={"text"}
            placeholder={"Ingrese usuario o correo"}
          />
          <InputContext
            user={"Contraseña"}
            name="pass"
            type={"password"}
            placeholder={"Ingrese contraseña"}
          />
          <ForgotPass>¿Olvidaste tu contraseña?</ForgotPass>
          <ButtonContext title={"ACCEDER"}></ButtonContext>
        </form>
        <NewUser>
          <ButtonContext title={"CREAR NUEVO USUARIO"}></ButtonContext>
        </NewUser>
      </FormContainer>
    </SignInBody>
  );
};

export default UserSignIn;