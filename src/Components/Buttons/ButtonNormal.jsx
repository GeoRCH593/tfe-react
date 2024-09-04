import { BtnContain, BtnStyle, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonNormal = ({ classIconId, textButton, onClick}) => {
  return (
    <BtnContain>
      <BtnStyle type="button" onClick={onClick}>
        <IconButton className={classIconId}></IconButton>
        {textButton}
      </BtnStyle>
    </BtnContain>
  );
};

ButtonNormal.propTypes = {
  classIconId: PropTypes.string,
  textButton: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonNormal;