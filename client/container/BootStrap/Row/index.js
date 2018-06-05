import React from 'react';
import { string, node, objectOf } from 'prop-types';

import styleMaker from '../utils/bootstrapStyleMaker';

function Row({
  children, className, style, ...rest
}) {
  return (
    <div className={`row ${styleMaker({ ...rest })}${className} `} style={{ ...style }}>
      {children}
    </div>
  );
}

Row.displayName = 'RowBootStrap';
Row.defaultProps = {
  className: '',
  style: {},
};
Row.propTypes = {
  children: node.isRequired,
  className: string,
  style: objectOf({}),
};

export default Row;
