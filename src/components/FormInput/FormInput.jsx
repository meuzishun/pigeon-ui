import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './FormInput.module.scss';

const FormInput = forwardRef(
  ({ type, id, name, label, placeholder, value, onChange }, ref) => {
    return (
      <fieldset className={styles['form-input']}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type || 'text'}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref} // Use ref here
        />
      </fieldset>
    );
  }
);

FormInput.displayName = 'FormInput';

FormInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormInput;
