import { BtnContain, BtnSubmit, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonSubmit = ({ classIconId, submitText}) => {
  return (
    <BtnContain>
      <BtnSubmit type="submit">
        <IconButton className={classIconId}></IconButton>
        {submitText}
      </BtnSubmit>
    </BtnContain>
  );
};

ButtonSubmit.propTypes = {
  submitText: PropTypes.string,
  classIconId: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonSubmit;
