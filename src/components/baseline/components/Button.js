import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import { Icon } from 'components/baseline'

export const Button = props => {

  const {
    children,
    className,
    danger,
    full,
    href,
    icon,
    to,
    primary,
    link,
    large,
    nav,
    onClick,
    success,
    user

  } = props;

  const styles = classNames({
    Button: true,
    danger,
    link,
    large,
    full,
    navigation: nav,
    noLabel: !children,
    success,
    user,
    primary
  });

  console.log(props)

  if (to) {
    return (
      <Link
        className={`${styles} ${className}`}
        to={to}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </Link>
    )
  } else if (href) {
    return (
      <a
        href={href}
        className={`${styles} ${className}`}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </a>
    )
  }
  else {
    return (
      <button
        href={href}
        className={`${styles} ${className}`}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </button>
    )
  }
}
