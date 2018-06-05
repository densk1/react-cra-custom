import React from 'react';
import { bool, node, string, objectOf } from 'prop-types';
import styleMaker from '../utils/bootstrapStyleMaker';

function Container({
  fluid, children, className, img, style, ...rest
}) {
  const isFluid = fluid ? 'container-fluid' : 'container';
  return (
    <div
      className={
        `${isFluid} ${className} ${styleMaker(rest)}`.trim()
      }
      style={{
        backgroundImage: img ? `url(${img})` : '',
        backgroundPosition: img ? 'center' : '',
        backgroundSize: img ? 'cover' : '',
        backgroundRepeat: img ? 'no-repeat' : '',
        ...style,
      }}
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
  style: {},
};
Container.propTypes = {
  children: node.isRequired,
  className: string,
  img: string,
  fluid: bool,
  style: objectOf({}),
};

export default Container;
