import {
  FormContainer,
  IconLogo,
  TitleContainer,
  TitleForm,
  ButtonContain,
  RegisterBody,
  PassContain,
  InputPolitics,
  FormRegister,
} from "../styles/ContextStyles/userRegister.js";
import { GlobalStyle } from "../styles/common/globalStyles.js";
import BillieIcon from "../assets/billie-icon-white-green.svg";
import ButtonContext from "../Components/Context/ButtonContext";
import { LabelInputPolitics } from "../styles/ContextStyles/userRegister";
import { FormSignDiv } from "../styles/ContextStyles/userSignIn";
import { useForm } from "react-hook-form";

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const dataSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Formulario enviado")
  });

  return (
    <RegisterBody>
      <GlobalStyle />
      <FormContainer>
        <TitleContainer>
          <IconLogo src={BillieIcon}></IconLogo>
          <TitleForm>Ingrese sus datos:</TitleForm>
        </TitleContainer>
        <FormRegister onSubmit={dataSubmit}>
          <FormSignDiv>
            <label>Nombres:</label>
            <input
              type="text"
              placeholder="Ingrese sus Nombres"
              {...register("nombres", { required: true })}
            />
            {errors.nombres && <span>* Los nombres son obligatorios</span>}
          </FormSignDiv>
          <FormSignDiv>
            <label>Apellidos:</label>
            <input
              type="text"
              placeholder="Ingrese sus Apellidos"
              {...register("apellidos", { required: true })}
            />
            {errors.apellidos && <span>* Los apellidos son obligatorios</span>}
          </FormSignDiv>
          <FormSignDiv>
            <label>Correo electrónico:</label>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              {...register("correo", { required: true })}
            />
            {errors.correo && <span>* Correo obligatorio</span>}
          </FormSignDiv>
          <PassContain>
            <FormSignDiv>
              <label>Contraseña:</label>
              <input
                type="password"
                placeholder="contraseña"
                {...register("password", {
                  required: { value: true, message: "* Necesario password" },
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </FormSignDiv>
            <FormSignDiv>
              <label>Confirmar:</label>
              <input
                type="password"
                placeholder="confirmar contraseña"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message:"* Necesario confirmar"
                    },
                    validate:(value) => {
                      if (value === watch('password')) {
                        return true
                      } else {
                        return "los passwords no coinciden"
                      }
                    }
                })}
              />
              {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}
            </FormSignDiv>
          </PassContain>
          <div>
            <LabelInputPolitics>
              <InputPolitics
                type="checkbox"
                name="Usepolitics"
                {...register("terminos", { required: true })}
              />
              Aceptar todos los términos y condiciones de envío de información
              acorde a nuestras Políticas de uso.
            </LabelInputPolitics>
            {errors.terminos && <span>* Revisar los términos y condiciones</span>}
          </div>
          <ButtonContain>
            <ButtonContext titleText={"REGISTRAR"}></ButtonContext>
            <ButtonContext titleText={"CANCELAR"}></ButtonContext>
          </ButtonContain>
        </FormRegister>
      </FormContainer>
    </RegisterBody>
  );
};

export default UserRegister;