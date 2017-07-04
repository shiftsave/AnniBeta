import React, { Component } from "react";
// import constants from "constants";
import ProjectManager from "containers/ProjectManager";
import AuthManager from "containers/AuthManager";
import { ProjectList, ProjectListItem } from "./components/ProjectList";
import {
  FILE_DATABASE_DIRECTORY,
  FILE_DATABASE_HISTORY_DIRECTORY
} from "constants/file";

import { Content, Heading, Paragraph, Section } from "styled";
import { Loader } from "components/baseline";

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    const loading = !auth.toJS().isAuthenticated;
    const filteredProjects = projects.filter(
      p =>
        p.get("name") !== FILE_DATABASE_DIRECTORY &&
        p.get("name") !== FILE_DATABASE_HISTORY_DIRECTORY
    );
    const projectItems = filteredProjects.valueSeq().toJS().map(project => {
      return (
        <ProjectListItem
          name={project.name}
          key={project.name}
          link={`/project/${project.name}`}
        />
      );
    });

    const projectsList = (
      <ProjectList>
        {projectItems}
      </ProjectList>
    );

    const empty = (
      <Section>
        <Paragraph>Empty</Paragraph>
      </Section>
    );

    const renderProjects = projectItems.length ? projectsList : empty;
    return (
      <Section>
        <Heading>Welcome Back Mika!</Heading>
        <Content>
          {loading ? <Loader fullPage /> : renderProjects}
        </Content>
      </Section>
    );
  }
}

export default ProjectManager(AuthManager(Dashboard));
