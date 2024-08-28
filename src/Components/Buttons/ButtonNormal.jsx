import { BtnContain, BtnSubmit, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonNormal = ({ classIconId, textButton}) => {
  return (
    <BtnContain>
      <BtnSubmit type="button">
        <IconButton className={classIconId}></IconButton>
        {textButton}
      </BtnSubmit>
    </BtnContain>
  );
};

ButtonNormal.propTypes = {
  classIconId: PropTypes.string,
  textButton: PropTypes.string,
  onClick: PropTypes.string
};

export default ButtonNormal;
