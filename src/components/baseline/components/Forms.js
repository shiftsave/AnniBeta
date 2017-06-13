import React from "react";
import classNames from "classnames";

export const TextArea = (
  { children, className, onChange, placeholder, ref, value }
) => {
  const styles = classNames({
    TextArea: true,
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
