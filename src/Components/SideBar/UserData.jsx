import { UserDataStyle } from "../../styles/Sidebar/userData.js";
import UserImg from "../../assets/images/user-img.jpg";

const User = "Geovanny Rodríguez";
const Admin = "Administrador";
const UpdateData = "Actualizar Datos";
const CLoseSession = "Cerrar Sesión";

const UserData = () => {
  return (
    <UserDataStyle>
      <img src={UserImg}></img>
      <div>
        <h6>{User}</h6>
        <p>{Admin}</p>
        <p>{UpdateData}</p>
        <p>{CLoseSession}</p>
      </div>
    </UserDataStyle>
  );
};

export default UserData;