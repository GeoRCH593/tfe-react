import { BtnContain, BtnStyle, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonSubmit = ({ classIconId, submitText, onClick }) => {
  return (
    <BtnContain>
      <BtnStyle type="submit" onClick={onClick}>
        <IconButton className={classIconId}></IconButton>
        {submitText}
      </BtnStyle>
    </BtnContain>
  );
};

ButtonSubmit.propTypes = {
  submitText: PropTypes.string,
  classIconId: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonSubmit;