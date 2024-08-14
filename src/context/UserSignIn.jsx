import {
  SignInBody,
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
} from "../styles/ContextStyles/userSignIn";
import { GlobalStyle } from "../styles/globalStyles";
import BillieIcon from "../assets/billie-icon-white-green.svg";

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
          <div className="form-control">
            <label>
              Usuario:
              <input
                name="user"
                type="text"
                placeholder="Ingrese su email o nombre de usuario"
              />
              <i className="bi bi-person"></i>
            </label>
          </div>
          <div className="form-control">
            <label>
              Contraseña:
              <input
                name="password"
                type="password"
                placeholder="Ingrese contraseña"
              />
              <i className="bi bi-lock"></i>
            </label>
          </div>
          <button>Acceder </button>
        </form>
        <p>¿Olvidaste tu contraseña?</p>
        <button>Registrar usuario nuevo</button>
      </FormContainer>
    </SignInBody>
  );
};

export default UserSignIn;
