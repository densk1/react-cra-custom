import React from 'react';
import { bool, node, string } from 'prop-types';
import styleMaker from '../utils/bootstrapStyleMaker';

function Container({
  fluid, children, className, img, ...rest
}) {
  const isFluid = fluid ? 'container-fluid' : 'container';
  return (
    <div
      className={
        `${isFluid} ${className} ${styleMaker(rest)}`.trim()
      }
      style={img ? {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      } : {}}
    >
      {children}
    </div>

  );
}

Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false,
  className: '',
  img: '',
};
Container.propTypes = {
  children: node.isRequired,
  className: string,
  img: string,
  fluid: bool,
};

export default Container;
