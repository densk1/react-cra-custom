import React from 'react';
import { string, node } from 'prop-types';

import styleMaker from '../utils/bootstrapStyleMaker';

const Row = ({
  children, className, ...rest
}) => (
  <div className={`row ${styleMaker({ ...rest })}${className} `}>
    {children}
  </div>
);

Row.displayName = 'RowBootStrap';
Row.defaultProps = {
  className: '',
};
Row.propTypes = {
  children: node.isRequired,
  className: string,
};

export default Row;
