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

export const Section = ({ name, checked, onClick }) => {

  const styles = classNames({
    checked
  });

  return (
  <div className="Section">
    <label className={styles}>
      <h5>{name}</h5>
      {checked ? <div className="pip checked" /> : <div className="pip" /> }
      <input type="radio" checked={checked} onClick={onClick} readOnly value={name}/>
    </label>
  </div>
)
}
