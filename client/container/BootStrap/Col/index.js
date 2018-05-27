import React from 'react';
import { string, node, number } from 'prop-types';
import styleMaker from '../utils/bootstrapStyleMaker';

function Col({
  children,
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  ...rest
}) {
  let classN = 'col ';
  if (col) classN += `col-${col} `;
  if (xs) classN += `col-xs-${xs} `;
  if (sm) classN += `col-sm-${sm} `;
  if (md) classN += `col-md-${md} `;
  if (lg) classN += `col-lg-${lg} `;
  if (xl) classN += `col-xl-${xl} `;
  return (
    <div
      className={
        `${classN}${styleMaker({ ...rest })} ${className} `.trim()
      }
      style={rest.style}
    >
      {children}
    </div>
  );
}

Col.displayName = 'Column';
Col.defaultProps = {
  className: '',
  col: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};
Col.propTypes = {
  className: string,
  children: node.isRequired,
  col: number,
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
};

export default Col;
