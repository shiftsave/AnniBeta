import React from "react";

const _Avatar = props => {
  const {
    className,
    onClick,
    initial
  } = props;

  return (
    <div className={className} onClick={onClick}>
      <span>{initial}</span>
    </div>
  );
};

_Avatar.defaultProps = {
  children: null,
  href: null,
  Icons: null,
  to: null
};

export default _Avatar;
