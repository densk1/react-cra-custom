import React from 'react';
import { bool, node, string } from 'prop-types';


const Container = ({ fluid, children, className, ...rest }) => {
  const isFluid = fluid ? 'container-fluid' : 'container';
  return (
    <div className={`${isFluid} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false,
  className: '',
};
Container.propTypes = {
  children: node.isRequired,
  className: string,
  fluid: bool,
};

export default Container;
