import { Icon, NavLinks } from "../../styles/sideBar";
import { PropTypes } from "prop-types";

const SideBarBtns = ({ to, icon, title, span, subBtn, handleclick }) => {
  return (
    <li>
        <NavLinks strict="true" to={to}>
          <Icon>{icon}</Icon>
          {title}
        </NavLinks>
    </li>
  );
};

SideBarBtns.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default SideBarBtns;
