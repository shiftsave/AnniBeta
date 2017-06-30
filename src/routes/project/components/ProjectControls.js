import React from "react";

export const ProjectControls = ({ children }) => {
  return (
    <div className="ProjectControls">
      <form className="content">
        {children}
      </form>
    </div>
  );
};

export const Section = ({ name, checked, onClick }) => (
  <div className="Section">
    <label>
      {name}
      <input type="radio" checked={checked} onClick={onClick} readOnly value={name}/>
    </label>
  </div>
)
