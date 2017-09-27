import React from "react";
import classNames from "classnames";

export const TextArea = props => {
  const {
    className,
    onChange,
    placeholder,
    value,
    imageItem
  } = props;

  const styles = classNames({
    imageItem: imageItem,
    [className]: className
  });

  return (
    <textarea
      className={styles}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export const Input = props => {
  const {
    className,
    onChange,
    placeholder,
    value
  } = props;

  return (
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
