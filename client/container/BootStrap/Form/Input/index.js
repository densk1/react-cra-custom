import React from 'react';
import { func, bool, string } from 'prop-types';

const Input = ({
  label,
  placeholder,
  name,
  type,
  onChange,
  helper,
  helperText,
  error,
  errorText,
  value,
}) => (
  <div className="form-group">
    { label &&
      <label htmlFor={name} className="text-muted small mb-0">
        {label && label}
        <input
          type={type}
          name={name}
          id={name}
          className="form-control"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        {helper && <small className="form-text text-muted">{helperText}</small>}
        {error && <small className="form-text text-muted text-danger">{errorText}</small>}
      </label>
    }

  </div>
);

Input.displayName = 'Input';
Input.defaultProps = {
  label: '',
  placeholder: '',
  helper: false,
  helperText: '',
  error: false,
  errorText: '',
};
Input.propTypes = {
  label: string,
  placeholder: string,
  name: string.isRequired,
  type: string.isRequired,
  onChange: func.isRequired,
  helper: bool,
  helperText: string,
  error: bool,
  errorText: string,
  value: string.isRequired,
};

export default Input;
