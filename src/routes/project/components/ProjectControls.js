import React from "react";
import classNames from "classnames";
import { Button } from "components/baseline";
import { ProjectNav, ProjectNavItem, Content, Label  } from "styled";


export const ProjectControls = ({ children }) => {
  return (
    <ProjectNav>
      <Content full>
        {children}
        <Button icon="add" />
      </Content>
    </ProjectNav>
  );
};

export const ProjectSectionNavItem = (
  { name, checked, onClick, projectPath }
) => {
  const styles = classNames({
    checked
  });

  return (
    <ProjectNavItem
      className="ProjectSectionNavItem"
      to={{
        pathname: projectPath,
        query: { section: name }
      }}
      onClick={onClick}
    >
      <Label className={styles}>
        <h5 className="ProjectSectionNavItem-name">{name}</h5>
        {checked ? <div className="pip checked" /> : <div className="pip" />}
        <input type="radio" checked={checked} readOnly value={name} />
      </Label>
    </ProjectNavItem>
  );
};
