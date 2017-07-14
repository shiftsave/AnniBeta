import React from "react";

export const TextArea = props => {
  const {
    className,
    onChange,
    placeholder,
    value
  } = props;

  return (
    <textarea
      className={className}
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
