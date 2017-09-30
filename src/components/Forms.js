import React from "react";
import classNames from "classnames";
import { FormGroup, OutlineIcon } from "styled";

export const TextArea = props => {
  const {
    className,
    onChange,
    placeholder,
    value,
    imageItem,
    icon
  } = props;

  const styles = classNames({
    imageItem: imageItem,
    [className]: className
  });

  return (
    <FormGroup icon>
      {icon && <OutlineIcon color name={icon} size={24} />}
      <textarea
        className={styles}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </FormGroup>
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
