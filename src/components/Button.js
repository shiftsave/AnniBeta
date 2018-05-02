import React from "react";
import { Link } from "react-router";
import { OutlineIcon } from "styled";

export const BaseButton = props => {
  const {
    children,
    className,
    href,
    icon,
    to,
    onClick,
    initial
  } = props;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {icon && <OutlineIcon name={icon} />}
        {initial && <span>{initial}</span>}
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className} onClick={onClick} >
        {icon && <OutlineIcon name={icon} />}
        {initial && <span>{initial}</span>}
        {children}
      </a>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {icon && <OutlineIcon name={icon} />}
        {initial && <span>{initial}</span>}
        {children}
      </button>
    );
  }
};
