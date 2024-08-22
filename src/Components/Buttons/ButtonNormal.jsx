import { BtnContain, BtnSubmit, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonNormal = ({ classIcon, textButton }) => {
  return (
    <BtnContain>
      <BtnSubmit type="button">
        <IconButton className={classIcon}></IconButton>
        {textButton}
      </BtnSubmit>
    </BtnContain>
  );
};

ButtonNormal.propTypes = {
  classIcon: PropTypes.string,
  textButton: PropTypes.string,
};

export default ButtonNormal;
