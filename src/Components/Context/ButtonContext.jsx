import {FormButton} from './buttonStyle.js';
import {PropTypes} from 'prop-types';


const ButtonContext = ({titleText, actions}) => {
  return (
    <FormButton 
    type= "submit"
    onClick={actions}
    >
    {titleText}
    </FormButton>
  );
};

ButtonContext.propTypes = {
  titleText: PropTypes.string,
  actions: PropTypes.func,

};
export default ButtonContext;