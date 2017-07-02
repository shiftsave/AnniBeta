import React from "react";
import classNames from "classnames";
import { Link } from "react-router";

export const ProjectControls = ({ children }) => {
  return (
    <div className="ProjectControls">
      <form className="content">
        {children}
      </form>
    </div>
  );
};

export const ProjectSectionNavItem = ({ name, checked, onClick, projectPath }) => {
  const styles = classNames({
    checked
  });

  return (
    <Link className="Section" to={{
      pathname: projectPath,
      query: { section: name }
    }} onClick={onClick}>
      <label className={styles}>
        {name}
        {checked ? <div className="pip checked" /> : <div className="pip" />}
        <input
          type="radio"
          checked={checked}
          readOnly
          value={name}
        />
      </label>
    </Link>
  );
};
