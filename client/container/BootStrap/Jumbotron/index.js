import React from 'react';
import { bool, node, string } from 'prop-types';
import styleMaker from '../utils/bootstrapStyleMaker';

function Jumbotron({
  fluid, children, className, ...rest
}) {
  const isFluid = fluid ? 'jumbotron jumbotron-fluid ' : 'jumbotron ';
  return (
    <div className={`${isFluid}${styleMaker(rest)} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

Jumbotron.displayName = 'Jumbotron';
Jumbotron.defaultProps = {
  fluid: false,
  className: '',
};
Jumbotron.propTypes = {
  children: node.isRequired,
  className: string,
  fluid: bool,
};

export default Jumbotron;
