import { BtnContain, BtnSubmit, IconButton } from "./buttonsStyles";
import { PropTypes } from "prop-types";

const ButtonSubmit = ({ iconClass, submitText }) => {
  return (
    <BtnContain>
      <BtnSubmit type="submit">
        <IconButton className={iconClass}></IconButton>
        {submitText}
      </BtnSubmit>
    </BtnContain>
  );
};

ButtonSubmit.propTypes = {
  submitText: PropTypes.string,
  iconClass: PropTypes.string,
};
export default ButtonSubmit;
