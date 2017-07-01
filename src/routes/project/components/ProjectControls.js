import React from "react";
import classNames from "classnames";



export const ProjectControls = ({ children }) => {
  return (
    <div className="ProjectControls">
      <form className="content">
        {children}
      </form>
    </div>
  );
};

export const ProjectSectionNavItem = ({ name, checked, onClick }) => {

  const styles = classNames({
    checked
  });

  return (
  <div className="Section">
    <label className={styles}>
      {name}
      {checked ? <div className="pip checked" /> : <div className="pip" /> }
      <input type="radio" checked={checked} onClick={onClick} readOnly value={name}/>
    </label>
  </div>
)
}
