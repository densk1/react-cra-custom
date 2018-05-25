import React from 'react';
import { func, string, bool, shape } from 'prop-types';
import styleMaker from '../utils/bootstrapStyleMaker';

const Button = ({
  className, onClick, label, lg,
  sm, block, disabled, theme, outline, style, ...rest
}) => {
  let btn = 'btn ';
  if (theme && outline) {
    btn += `btn-outline-${theme} `;
  } else if (theme) {
    btn += `btn-${theme} `;
  }
  if (lg) btn += 'btn-lg ';
  if (sm) btn += 'btn-sm ';
  if (block) btn += 'btn-block ';
  if (disabled) btn += 'disabled ';
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        `${btn}${styleMaker({ ...rest })} ${className} `.trim()
      }
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  className: '',
  lg: false,
  sm: false,
  block: false,
  disabled: false,
  outline: false,
  style: {},
};
Button.propTypes = {
  className: '',
  onClick: func.isRequired,
  label: string.isRequired,
  lg: bool,
  sm: bool,
  block: bool,
  disabled: bool,
  theme: string.isRequired,
  outline: bool,
  style: shape({}),
};

export default Button;
