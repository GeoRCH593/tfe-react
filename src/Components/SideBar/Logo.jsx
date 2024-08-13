import { Link } from "react-router-dom";
import { LogoWrapper } from "../../styles/sideBar";
import Billie from "../../assets/billie-logo-sidebar.svg"

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="home">
        <div>
        <img src={Billie}></img>
        </div>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
