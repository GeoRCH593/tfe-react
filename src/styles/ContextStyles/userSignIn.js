import styled from "styled-components";

/*Container de formulario global */
export const SignInBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #6d6c6c;
  font-family: Open Sans;
`;

/*Container de formulario completo*/
export const FormContainer = styled.div`
  background-color: #0c302e;
  width: 350px;
  min-height: 450px;
  padding: 1rem 4rem;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

/*Contenedor del titulo h2*/
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSignIn = styled.form`

`;

/*Estilos del Logotipo Aplicativo */
export const IconLogo = styled.img`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

/*Titulo del formulario de registro */
export const TitleForm = styled.h6`
  font-family: Open Sans;
  font-weight: 100;
  color: #ffffff;
  padding-bottom: 1rem;
  text-align: center;
`;

/*Olvidaste la contraseña */
export const ForgotPass = styled.p`
  color: #fff;
  font-family: Open Sans;
  font-size: 0.8rem;
  font-weight: 100;
  cursor: pointer;
`;
/*Contenedor boton nuevo usuario */
export const NewUser = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3em;
  padding-top: 2rem;
  font-size: 0.7rem;
  transition: 0.4s ease-in-out all;
  p {
    color: #fff;
  }
  a {
    color: #909090 !important;
    cursor: pointer;

    &:hover {
      color: #39B54A !important;
    }
  }
`;
