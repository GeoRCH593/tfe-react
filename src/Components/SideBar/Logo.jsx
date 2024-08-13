import { Link } from "react-router-dom";
import { LogoWrapper } from "../../styles/sideBar";
import Bliie from "../../assets/billie-logo-sidebar.svg"

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="home">
        <div>
        <img src={Bliie}></img>
        </div>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
