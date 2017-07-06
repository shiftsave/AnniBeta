import React from "react";
import { Link } from "react-router";
import { Icons } from "./Icons";

export const BaseButton = props => {
  const {
    children,
    className,
    href,
    icon,
    to,
    onClick
  } = props;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {icon && <Icons name={icon} />}{children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {icon && <Icons name={icon} />}{children}
      </a>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {icon && <Icons name={icon} />}{children}
      </button>
    );
  }
};

BaseButton.defaultProps = {
  children: null,
  href: null,
  Icons: null,
  to: null
};
