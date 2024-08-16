import { useState } from "react";
import {
  Arrow,
  Icon,
  NavBtn,
  NavLinks,
  Newest,
  SubLinks,
  SubMenu,
} from "../../styles/Sidebar/sideBar";
import { PropTypes } from "prop-types";

const SideBarBtns = ({ to, icon, title, span, subBtn, handleclick }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleSubMenu = () => {
    if (subBtn !== undefined) {
      setOpenSubMenu(!openSubMenu);
    }
  };

  return (
    <li>
      {subBtn === undefined ? (
        <NavLinks
          strict="true"
          to={{pathname:to, state: { flag: title } }}
          onClick={handleclick}
        >
          <Icon>{icon}</Icon>
          {title}
          {span !== undefined && <Newest>{span}</Newest>}
        </NavLinks>
      ) : (
        <NavBtn
        to={{pathname:to, state: { flag: title } }}
        onClick={() => handleSubMenu()}>
          <Icon>{icon}</Icon>
          {title}
          {span !== undefined && <Newest>{span}</Newest>}
          {subBtn !== undefined && (
            <Arrow open={!openSubMenu && "open"}>
              <span></span>
            </Arrow>
          )}
        </NavBtn>
      )}
      <SubMenu
        tall={`${subBtn !== undefined}`}
        opened={openSubMenu ? "true" : "false"}
      >
        {subBtn !== undefined &&
          subBtn.map((btn, i) => (
            <div key={i}>
              <SubLinks
                key={i}
                to={to + "/" + btn.toLowerCase().replace(/\s+/g, "")}
                onClick={handleclick}
              >
                {btn}
              </SubLinks>
            </div>
          ))}
      </SubMenu>
    </li>
  );
};

SideBarBtns.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  span: PropTypes.string,
  subBtn: PropTypes.string,
  handleclick: PropTypes.string,
};

export default SideBarBtns;
