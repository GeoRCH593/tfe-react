import { FormInput, FormContain } from "../../styles/ContextStyles/inputContext.js";
import {PropTypes} from 'prop-types';

const InputContext = ({ user, name, type, placeholder }) => {
  return (
    <FormContain>
      <label>
        {user}
        <FormInput
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </FormContain>
  );
};

InputContext.propTypes = {
  user: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,

};
export default InputContext;
