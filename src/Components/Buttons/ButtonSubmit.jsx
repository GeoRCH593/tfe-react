import { BtnContain, BtnSubmit, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonSubmit = ({ classIconId, submitText, onClick }) => {
  return (
    <BtnContain>
      <BtnSubmit type="submit" onClick={onClick}>
        <IconButton className={classIconId}></IconButton>
        {submitText}
      </BtnSubmit>
    </BtnContain>
  );
};

ButtonSubmit.propTypes = {
  submitText: PropTypes.string,
  classIconId: PropTypes.string,
  onClick: PropTypes.string
};
export default ButtonSubmit;
