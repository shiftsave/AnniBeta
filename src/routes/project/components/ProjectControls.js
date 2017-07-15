import React from "react";
import classNames from "classnames";
import {
  Content,
  Label,
  ProjectNav,
  ProjectNavItem,
  ProjectNavId,
  Radio,
  Subheading
} from "styled";

export const ProjectControls = ({ children }) => {
  return (
    <ProjectNav>
      <Content full>
        {children}
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
        <Subheading micro>{name}</Subheading>
        {checked ? <ProjectNavId checked /> : <ProjectNavId />}
        <Radio checked={checked} readOnly value={name} hidden />
      </Label>
    </ProjectNavItem>
  );
};
