import {
  UserDataContent,
  UserDataStyle,
} from "../../styles/Sidebar/userData.js";
import UserImg from "../../assets/images/user-img.jpg";
import { Link } from "react-router-dom";

const User = "Geovanny Rodríguez";
const Admin = "Administrador";
const UpdateData = "Actualizar Datos";
const CLoseSession = "Cerrar Sesión";

const UserData = () => {
  return (
    <UserDataStyle>
      <img src={UserImg}></img>
      <UserDataContent>
        <h6>{User}</h6>
        <a>{Admin}</a>
        <Link to="configuracion/editardatosdelusuario">{UpdateData}</Link>
        <a>{CLoseSession}</a>
      </UserDataContent>
    </UserDataStyle>
  );
};

export default UserData;