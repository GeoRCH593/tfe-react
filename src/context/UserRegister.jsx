import {
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
  ButtonContain,
  RegisterBody,
  PassContain,
  InputPolitics,
} from "../styles/ContextStyles/userRegister.js";
import { GlobalStyle } from "../styles/globalStyles";
import BillieIcon from "../assets/billie-icon-white-green.svg";
import InputContext from "../Components/Context/InputContext";
import ButtonContext from "../Components/Context/ButtonContext";
import { LabelInputPolitics } from "../styles/ContextStyles/userRegister";

const UserRegister = () => {
  return (
    <RegisterBody>
      <GlobalStyle />
      <FormContainer>
        <TitleContainer>
          <IconLogo src={BillieIcon}></IconLogo>
          <TitleForm>Ingrese sus datos:</TitleForm>
        </TitleContainer>
        <form>
          <InputContext
            nameLabel={"Nombres :"}
            typeInput={"text"}
            textInput={"Ingrese sus nombres completos"}
          />
          <InputContext
            nameLabel={"Apellidos :"}
            typeInput={"text"}
            textInput={"Ingrese sus Apellidos"}
          />
          <InputContext
            nameLabel={"Correo Electrónico :"}
            typeInput={"email"}
            textInput={"Ingrese su correo electrónico"}
          />
          <PassContain>
            <InputContext
              nameLabel={"Contraseña :"}
              typeInput={"password"}
              textInput={"Ingrese su contraseña"}
            />
            <InputContext
              nameLabel={"Confirmar :"}
              typeInput={"password"}
              textInput={"Confirmar contraseña"}
            />
          </PassContain>
          <LabelInputPolitics>
            <InputPolitics type="checkbox" name="Usepolitics" value="" />
            Aceptar todos los términos y condiciones de envío de información
            acorde a nuestras Políticas de uso.
          </LabelInputPolitics>
        </form>
        <ButtonContain>
          <ButtonContext
            onClick={() => alert("Realizaste un registro")}
            title={"REGISTRAR"}
          ></ButtonContext>
          <ButtonContext
            onCLick={() => alert("Cancelaste el evento")}
            title={"CANCELAR"}
          ></ButtonContext>
        </ButtonContain>
      </FormContainer>
    </RegisterBody>
  );
};

export default UserRegister;
